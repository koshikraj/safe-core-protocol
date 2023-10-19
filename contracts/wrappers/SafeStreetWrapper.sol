// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import { IEAS, AttestationRequest, AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
// import { NO_EXPIRATION_TIME, EMPTY_UID } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import {ISafeProtocolRegistryWrapper} from "../interfaces/RegistryWrapper.sol";


/**
 * @title This is a SafeStreetWrapper contract to incentivize module developers
 */
contract SafeStreetWrapper  {

    mapping(address => ModulePublishInfo) public modulePublishList;
    mapping(bytes32 => AccountPaymentInfo) public accountListedPayments;


    struct ModulePublishInfo {
       address token;
       uint64 amount;
       address publisher;
       uint64 earnings; 
    }

    struct AccountPaymentInfo {
       address token;
       uint64 amount;
       bool fullfilled;
    }

    address public registryWrapper;

    event ModulePublishedWithPayment(address indexed module);
    event PaymentFullfilled(address indexed module, address indexed account);

    modifier onlyPublisher(address module) {
       
        (uint64 listedAt, uint64 flaggedAt, address publisher, address safeStreetWrapper) = ISafeProtocolRegistryWrapper(registryWrapper).checkWrap(module);

        require(msg.sender == publisher, "Not allowed to publish");

        _;
    }

    
    constructor(address registry) {
        registryWrapper = registry;

    }



    function publishWithPayment(address module, address token, uint64 amount) public onlyPublisher(module) {

          modulePublishList[module] = ModulePublishInfo(token, amount, msg.sender, 0);  

          emit ModulePublishedWithPayment(module);  
        

    }


    function fullfillPayment(address module, address account) public payable {

        ModulePublishInfo storage publishedModule = modulePublishList[module];   
        if(publishedModule.token == address(0)) {
            require(msg.value >= publishedModule.amount, "Payment fullfillment failed"); 
        }
        else {
            require(IERC20(publishedModule.token).transferFrom(msg.sender, address(this), publishedModule.amount), "Payment fullfillment failed"); 
        }  
        accountListedPayments[keccak256(abi.encodePacked(account, module))] = AccountPaymentInfo(publishedModule.token, publishedModule.amount, true);
        publishedModule.earnings = publishedModule.earnings + publishedModule.amount;

        emit PaymentFullfilled(module, account);
        

    }

    function checkAccountPaymentInfo(address module, address account) external view returns (address token, uint64 amount, bool fullfilled) {

        AccountPaymentInfo memory listedPayment = accountListedPayments[keccak256(abi.encodePacked(account, module))];
        ModulePublishInfo memory publishedModule = modulePublishList[module];
        token = publishedModule.token;
        amount = publishedModule.amount;
        fullfilled = listedPayment.fullfilled;

    } 
    

     // Function to withdraw Ether or tokens from each module.
    function withdrawFunds(address module) public {
        
        ModulePublishInfo memory publishedModule = modulePublishList[module];
        require(msg.sender == publishedModule.publisher, "Only the publisher can withdraw funds");
        if (publishedModule.token == address(0)) {
            require(address(this).balance >= publishedModule.amount, "Insufficient Ether balance");
            payable(publishedModule.publisher).transfer(publishedModule.amount);
        } else {
            require(IERC20(publishedModule.token).balanceOf(address(this)) >= publishedModule.amount, "Insufficient token balance");
            require(IERC20(publishedModule.token).transfer(publishedModule.publisher, publishedModule.amount), "Token transfer failed");
        }
        publishedModule.earnings = 0;
    }

        // Allow attestation to be performed outside contract

        // bytes32 attest = eas.attest(
        //         AttestationRequest({
        //             schema: schema,
        //             data: AttestationRequestData({
        //                 recipient: address(0), // No recipient
        //                 expirationTime: NO_EXPIRATION_TIME, // No expiration time
        //                 revocable: true,
        //                 refUID: EMPTY_UID, // No references UI
        //                 data: input, // Encode a single uint256 as a parameter to the schema
        //                 value: 0 // No value/ETH
        //             })
        //         })
        // );
        
    
}
