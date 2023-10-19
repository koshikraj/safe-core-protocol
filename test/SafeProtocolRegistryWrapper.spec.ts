import { ethers } from "hardhat";
import utils  from "ethers";

import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { AddressZero } from "@ethersproject/constants";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { getHooksWithPassingChecks } from "./utils/mockHooksBuilder";
import { getPluginWithFailingCallToSupportsInterfaceMethod } from "./utils/mockPluginBuilder";
import { PLUGIN_PERMISSION_DELEGATE_CALL, PLUGIN_PERMISSION_EXECUTE_CALL, MODULE_TYPE_PLUGIN, MODULE_TYPE_HOOKS } from "../src/utils/constants";

describe("SafeProtocolRegistryWrapper", async () => {
    let owner: SignerWithAddress, user1: SignerWithAddress;

    async function deployContractFixture() {
        [owner, user1] = await ethers.getSigners();

        // owner.provider.provider
        const safeProtocolRegistry = await ethers.deployContract("SafeProtocolRegistryWrapper", [owner]);
        const safeProtocolManager = await (
            await ethers.getContractFactory("SafeProtocolManagerWrapper")
        ).deploy(owner, await safeProtocolRegistry.getAddress());

        const safe = await ethers.deployContract("TestExecutor", [safeProtocolManager.target], { signer: owner });

        const safeStreet = await ethers.deployContract("SafeStreetWrapper", [safeProtocolRegistry.target], { signer: owner });

        const safeStreetToken = await ethers.deployContract("SafeStreetToken",  [owner], { signer: owner });


        return {safeProtocolManager, safe, safeProtocolRegistry, safeStreet, safeStreetToken};
    }

    it("Should allow add a module only once", async () => {
        const { safeProtocolRegistry } = await loadFixture(deployContractFixture);
        const mockHookAddress = (await getHooksWithPassingChecks()).target;
        await safeProtocolRegistry.connect(owner).addModule(mockHookAddress, MODULE_TYPE_PLUGIN, owner);
        await expect(safeProtocolRegistry.connect(owner).addModule(mockHookAddress, MODULE_TYPE_PLUGIN, owner)).to.be.revertedWithCustomError(
            safeProtocolRegistry,
            "CannotAddModule",
        );
    });


    it("Should allow only owner to flag a module", async () => {
        const { safeProtocolRegistry } = await loadFixture(deployContractFixture);
        const mockHookAddress = (await getHooksWithPassingChecks()).target;

        await safeProtocolRegistry.connect(owner).addModule(mockHookAddress, MODULE_TYPE_PLUGIN, owner);

        await expect(safeProtocolRegistry.connect(user1).flagModule(mockHookAddress)).to.be.revertedWith(
            "Ownable: caller is not the owner",
        );

        expect(await safeProtocolRegistry.connect(owner).flagModule(mockHookAddress));

        const {flaggedAt } = await safeProtocolRegistry.checkWrap.staticCall(mockHookAddress);
        expect(flaggedAt).to.be.gt(0);
    });


    it("Should allow a Safe to enable a plugin after payment using native currency", async () => {

        const { safeStreet, safeProtocolRegistry, safeProtocolManager, safe } = await loadFixture(deployContractFixture);

        const plugin = await (await ethers.getContractFactory("TestPlugin")).deploy();
        const pluginAddress = await plugin.getAddress();


        await safeProtocolRegistry.connect(owner).publishModule(pluginAddress, MODULE_TYPE_PLUGIN, owner, safeStreet.target);
        let paymentInfo = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        await safeStreet.connect(owner).publishWithPayment(pluginAddress, AddressZero, 1 )

         paymentInfo = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.false

        await safeStreet.connect(owner).fullfillPayment(pluginAddress, safe.target, {value: 1})

        paymentInfo  = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.true



        const data = safeProtocolManager.interface.encodeFunctionData("enablePlugin", [pluginAddress, PLUGIN_PERMISSION_EXECUTE_CALL]);

        await safe.exec(safe.target, 0, data);
    });


    it("Should allow a Safe to enable a plugin after payment using token", async () => {

        const { safeStreet, safeStreetToken, safeProtocolRegistry, safeProtocolManager, safe } = await loadFixture(deployContractFixture);

        const plugin = await (await ethers.getContractFactory("TestPlugin")).deploy();
        const pluginAddress = await plugin.getAddress();


        await safeProtocolRegistry.connect(owner).publishModule(pluginAddress, MODULE_TYPE_PLUGIN, owner, safeStreet.target);

        await safeStreet.connect(owner).publishWithPayment(pluginAddress, safeStreetToken.target, 2 )

        let paymentInfo = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.false


        await safeStreetToken.connect(owner).approve(safeStreet.target,  2 )
        await safeStreet.connect(owner).fullfillPayment(pluginAddress, safe.target)

        paymentInfo  = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.true

        const data = safeProtocolManager.interface.encodeFunctionData("enablePlugin", [pluginAddress, PLUGIN_PERMISSION_EXECUTE_CALL]);

        await safe.exec(safe.target, 0, data);
    });


    it("Should allow a Safe to enable a plugin after payment using token by a third party user", async () => {

        const { safeStreet, safeStreetToken, safeProtocolRegistry, safeProtocolManager, safe } = await loadFixture(deployContractFixture);

        const plugin = await (await ethers.getContractFactory("TestPlugin")).deploy();
        const pluginAddress = await plugin.getAddress();


        await safeProtocolRegistry.connect(owner).publishModule(pluginAddress, MODULE_TYPE_PLUGIN, owner, safeStreet.target);

        await safeStreet.connect(owner).publishWithPayment(pluginAddress, safeStreetToken.target, 2 )
        let paymentInfo = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.false

        await safeStreetToken.connect(owner).transfer(user1,  2 )
        await safeStreetToken.connect(user1).approve(safeStreet.target,  2 )
        await safeStreet.connect(user1).fullfillPayment(pluginAddress, safe.target)

        paymentInfo  = await safeStreet.checkAccountPaymentInfo.staticCall(pluginAddress, safe.target)

        expect(paymentInfo.fullfilled).to.be.true

        const data = safeProtocolManager.interface.encodeFunctionData("enablePlugin", [pluginAddress, PLUGIN_PERMISSION_EXECUTE_CALL]);

        await safe.exec(safeProtocolManager.target, 0, data);
    });

    it("Should allow a publsher to withdraw the module earnings", async () => {

        const { safeStreet, safeStreetToken, safeProtocolRegistry, safe } = await loadFixture(deployContractFixture);

        const plugin = await (await ethers.getContractFactory("TestPlugin")).deploy();
        const pluginAddress = await plugin.getAddress();


        await safeProtocolRegistry.connect(owner).publishModule(pluginAddress, MODULE_TYPE_PLUGIN, owner, safeStreet.target);

        await safeStreet.connect(owner).publishWithPayment(pluginAddress, safeStreetToken.target, 2 )


        await safeStreetToken.connect(owner).transfer(user1,  2 )
        await safeStreetToken.connect(user1).approve(safeStreet.target,  2 )
        await safeStreet.connect(user1).fullfillPayment(pluginAddress, safe.target)


        expect(await safeStreet.connect(owner).withdrawFunds(pluginAddress))


    });

});
