declare const _default: {
    readonly "5": readonly [{
        readonly name: "goerli";
        readonly chainId: "5";
        readonly contracts: {
            readonly SafeProtocolManagerWrapper: {
                readonly address: "0x9B6A446d8BBc9a3F75b2E9C17766b8713bcC58d7";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "ContractDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "functionSelector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "FunctionHandlerNotSet";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "InvalidCalldataLength";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidSender";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "pluginRequires";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermission";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermission";
                        readonly type: "uint8";
                    }];
                    readonly name: "MissingPluginPermission";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "ModuleNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginPermissionsMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "FunctionHandlerChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly stateMutability: "nonpayable";
                    readonly type: "fallback";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "";
                        readonly type: "bytes4";
                    }];
                    readonly name: "functionHandlers";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "getFunctionHandler";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "uint8";
                            readonly name: "permissions";
                            readonly type: "uint8";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "setFunctionHandler";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeProtocolRegistryWrapper: {
                readonly address: "0xaB4C8586825886De2848E7ECd578550C43FD41c7";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "CannotAddModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "expectedInterfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "ModuleDoesNotSupportExpectedInterfaceId";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublished";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "addModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "data";
                        readonly type: "bytes32";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkWrap";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "flagModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedModules";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedWrappers";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "attestationId";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly name: "publishModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetToken: {
                readonly address: "0xb682DB693751b65430138aec47E09435D391f781";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Approval";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Transfer";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }];
                    readonly name: "allowance";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "approve";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "balanceOf";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "burn";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "decimals";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "subtractedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "decreaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "addedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "increaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "mint";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "name";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "symbol";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "totalSupply";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transfer";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transferFrom";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetWrapper: {
                readonly address: "0x203F02125D88D09e4606bCD3D65Bc60Dff010608";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublishedWithPayment";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "PaymentFullfilled";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }];
                    readonly name: "accountListedPayments";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "checkAccountPaymentInfo";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "fullfillPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "payable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "modulePublishList";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "earnings";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }];
                    readonly name: "publishWithPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registryWrapper";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "withdrawFunds";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly TestSafeProtocolManager: {
                readonly address: "0x9B5984CcF506029952442441cD36b116292d2e06";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "ContractDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "functionSelector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "FunctionHandlerNotSet";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "InvalidCalldataLength";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidSender";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly name: "ModuleNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "requiresRootAccess";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "providedValue";
                        readonly type: "bool";
                    }];
                    readonly name: "PluginAccessMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginEnabledOnlyForRootAccess";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "PluginRequiresRootAccess";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "FunctionHandlerChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bool";
                        readonly name: "allowRootAccess";
                        readonly type: "bool";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly stateMutability: "nonpayable";
                    readonly type: "fallback";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "allowRootAccess";
                        readonly type: "bool";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "rootAddressGranted";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "contract ISafe";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "contract ISafe";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "";
                        readonly type: "bytes4";
                    }];
                    readonly name: "functionHandlers";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "getFunctionHandler";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "bool";
                            readonly name: "rootAddressGranted";
                            readonly type: "bool";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "setFunctionHandler";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "testFunction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly TestSafeProtocolRegistryUnrestricted: {
                readonly address: "0xc07d01C11D05a1fFB18E44587A016ca6F48d5fd2";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotAddModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "expectedInterfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "ModuleDoesNotSupportExpectedInterfaceId";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "enum Enum.ModuleType";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "addModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "flagModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedModules";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "enum Enum.ModuleType";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
        };
    }];
    readonly "137": readonly [{
        readonly name: "polygon";
        readonly chainId: "137";
        readonly contracts: {
            readonly SafeProtocolManagerWrapper: {
                readonly address: "0x9B6A446d8BBc9a3F75b2E9C17766b8713bcC58d7";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "ContractDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "functionSelector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "FunctionHandlerNotSet";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "InvalidCalldataLength";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidSender";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "pluginRequires";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermission";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermission";
                        readonly type: "uint8";
                    }];
                    readonly name: "MissingPluginPermission";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "ModuleNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginPermissionsMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "FunctionHandlerChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly stateMutability: "nonpayable";
                    readonly type: "fallback";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "";
                        readonly type: "bytes4";
                    }];
                    readonly name: "functionHandlers";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "getFunctionHandler";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "uint8";
                            readonly name: "permissions";
                            readonly type: "uint8";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "setFunctionHandler";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeProtocolRegistryWrapper: {
                readonly address: "0xaB4C8586825886De2848E7ECd578550C43FD41c7";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "CannotAddModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "expectedInterfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "ModuleDoesNotSupportExpectedInterfaceId";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublished";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "addModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "data";
                        readonly type: "bytes32";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkWrap";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "flagModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedModules";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedWrappers";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "attestationId";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly name: "publishModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetToken: {
                readonly address: "0xb682DB693751b65430138aec47E09435D391f781";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Approval";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Transfer";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }];
                    readonly name: "allowance";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "approve";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "balanceOf";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "burn";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "decimals";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "subtractedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "decreaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "addedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "increaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "mint";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "name";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "symbol";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "totalSupply";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transfer";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transferFrom";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetWrapper: {
                readonly address: "0x203F02125D88D09e4606bCD3D65Bc60Dff010608";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublishedWithPayment";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "PaymentFullfilled";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }];
                    readonly name: "accountListedPayments";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "checkAccountPaymentInfo";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "fullfillPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "payable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "modulePublishList";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "earnings";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }];
                    readonly name: "publishWithPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registryWrapper";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "withdrawFunds";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
        };
    }];
    readonly "84531": readonly [{
        readonly name: "base_goerli";
        readonly chainId: "84531";
        readonly contracts: {
            readonly SafeProtocolManagerAttestation: {
                readonly address: "0x68F29c8054dBB959e39eA49c7DF7361517A870aA";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "AccountDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "AddressDoesNotImplementHooksInterface";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "requiresRootAccess";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "providedValue";
                        readonly type: "bool";
                    }];
                    readonly name: "PluginAccessMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginEnabledOnlyForRootAccess";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly name: "PluginNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "PluginRequiresRootAccess";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bool";
                        readonly name: "allowRootAccess";
                        readonly type: "bool";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "allowRootAccess";
                        readonly type: "bool";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "rootAddressGranted";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "contract ISafe";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "contract ISafe";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "bool";
                            readonly name: "rootAddressGranted";
                            readonly type: "bool";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "safe";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeProtocolManagerWrapper: {
                readonly address: "0x477B4a7EdCcd0cD568f74Eb417A495e487dc1C37";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "ContractDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "functionSelector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "FunctionHandlerNotSet";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "InvalidCalldataLength";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidSender";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "pluginRequires";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermission";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermission";
                        readonly type: "uint8";
                    }];
                    readonly name: "MissingPluginPermission";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "ModuleNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginPermissionsMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "FunctionHandlerChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly stateMutability: "nonpayable";
                    readonly type: "fallback";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "";
                        readonly type: "bytes4";
                    }];
                    readonly name: "functionHandlers";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "getFunctionHandler";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "uint8";
                            readonly name: "permissions";
                            readonly type: "uint8";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "setFunctionHandler";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeProtocolRegistryAttestation: {
                readonly address: "0xB8Efa352FA011EEe3552f73aC86d5b5ecA9802f7";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "CannotAddIntegration";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotAttestModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagIntegration";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: false;
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "IntegrationAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: false;
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "IntegrationFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAttested";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }, {
                        readonly internalType: "enum Enum.IntegrationType";
                        readonly name: "integrationType";
                        readonly type: "uint8";
                    }];
                    readonly name: "addIntegration";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }, {
                        readonly internalType: "contract IEAS";
                        readonly name: "eas";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "attestation";
                        readonly type: "bytes32";
                    }];
                    readonly name: "attestIntegration";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "checkAttest";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "attestationId";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "integration";
                        readonly type: "address";
                    }];
                    readonly name: "flagIntegration";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedAttestations";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "attestationId";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedIntegrations";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "enum Enum.IntegrationType";
                        readonly name: "integrationType";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeProtocolRegistryWrapper: {
                readonly address: "0xf0F9E7877926d267665dc9194999e09D117f5f42";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "CannotAddModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "expectedInterfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "ModuleDoesNotSupportExpectedInterfaceId";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublished";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "addModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "data";
                        readonly type: "bytes32";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkWrap";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "flagModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedModules";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedWrappers";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "attestationId";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "safeStreetWrapper";
                        readonly type: "address";
                    }];
                    readonly name: "publishModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetToken: {
                readonly address: "0xb682DB693751b65430138aec47E09435D391f781";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Approval";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }];
                    readonly name: "Transfer";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "owner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }];
                    readonly name: "allowance";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "approve";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "balanceOf";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "burn";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "decimals";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "subtractedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "decreaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "spender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "addedValue";
                        readonly type: "uint256";
                    }];
                    readonly name: "increaseAllowance";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "mint";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "name";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "symbol";
                    readonly outputs: readonly [{
                        readonly internalType: "string";
                        readonly name: "";
                        readonly type: "string";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "totalSupply";
                    readonly outputs: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "";
                        readonly type: "uint256";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transfer";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "from";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }];
                    readonly name: "transferFrom";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly SafeStreetWrapper: {
                readonly address: "0x6616e038299E02feFb80312691dB3B6696Bd6589";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModulePublishedWithPayment";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "PaymentFullfilled";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }];
                    readonly name: "accountListedPayments";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "checkAccountPaymentInfo";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "fullfilled";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "fullfillPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "payable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "modulePublishList";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "address";
                        readonly name: "publisher";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "earnings";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "token";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "amount";
                        readonly type: "uint64";
                    }];
                    readonly name: "publishWithPayment";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registryWrapper";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "withdrawFunds";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly TestSafeProtocolManager: {
                readonly address: "0x306961ACA7D3E100B41f5B68Aeb76247B1f26A49";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "registry";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "ContractDoesNotImplementValidInterfaceId";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "functionSelector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "FunctionHandlerNotSet";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "InvalidCalldataLength";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidPrevPluginAddress";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }];
                    readonly name: "InvalidSender";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "index";
                        readonly type: "uint256";
                    }];
                    readonly name: "InvalidToFieldInSafeProtocolAction";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "pluginRequires";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermission";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermission";
                        readonly type: "uint8";
                    }];
                    readonly name: "MissingPluginPermission";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "ModuleNotPermitted";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginAlreadyEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginNotEnabled";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "requiredPermissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "givenPermissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginPermissionsMismatch";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecutionFailed";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "ZeroPageSizeNotAllowed";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint256";
                        readonly name: "nonce";
                        readonly type: "uint256";
                    }];
                    readonly name: "ActionsExecuted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "FunctionHandlerChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly name: "HooksChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "PluginDisabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "PluginEnabled";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "oldRegistry";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "RegistryChanged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly indexed: false;
                        readonly internalType: "bytes32";
                        readonly name: "metadataHash";
                        readonly type: "bytes32";
                    }];
                    readonly name: "RootAccessActionExecuted";
                    readonly type: "event";
                }, {
                    readonly stateMutability: "nonpayable";
                    readonly type: "fallback";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "success";
                        readonly type: "bool";
                    }];
                    readonly name: "checkAfterExecution";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "checkModuleTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "moduleTxHash";
                        readonly type: "bytes32";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "to";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "value";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "enum Enum.Operation";
                        readonly name: "operation";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "safeTxGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "baseGas";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "gasPrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "gasToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address payable";
                        readonly name: "refundReceiver";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "signatures";
                        readonly type: "bytes";
                    }, {
                        readonly internalType: "address";
                        readonly name: "msgSender";
                        readonly type: "address";
                    }];
                    readonly name: "checkTransaction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "prevPlugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "disablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }];
                    readonly name: "enablePlugin";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "enabledPlugins";
                    readonly outputs: readonly [{
                        readonly internalType: "uint8";
                        readonly name: "permissions";
                        readonly type: "uint8";
                    }, {
                        readonly internalType: "address";
                        readonly name: "nextPluginPointer";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction";
                            readonly name: "action";
                            readonly type: "tuple";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeRootAccess";
                        readonly name: "rootAccess";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeRootAccess";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes";
                        readonly name: "data";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly components: readonly [{
                                readonly internalType: "address payable";
                                readonly name: "to";
                                readonly type: "address";
                            }, {
                                readonly internalType: "uint256";
                                readonly name: "value";
                                readonly type: "uint256";
                            }, {
                                readonly internalType: "bytes";
                                readonly name: "data";
                                readonly type: "bytes";
                            }];
                            readonly internalType: "struct SafeProtocolAction[]";
                            readonly name: "actions";
                            readonly type: "tuple[]";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "nonce";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "bytes32";
                            readonly name: "metadataHash";
                            readonly type: "bytes32";
                        }];
                        readonly internalType: "struct SafeTransaction";
                        readonly name: "transaction";
                        readonly type: "tuple";
                    }];
                    readonly name: "executeTransaction";
                    readonly outputs: readonly [{
                        readonly internalType: "bytes[]";
                        readonly name: "data";
                        readonly type: "bytes[]";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "";
                        readonly type: "bytes4";
                    }];
                    readonly name: "functionHandlers";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getEnabledHooks";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }];
                    readonly name: "getFunctionHandler";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginInfo";
                    readonly outputs: readonly [{
                        readonly components: readonly [{
                            readonly internalType: "uint8";
                            readonly name: "permissions";
                            readonly type: "uint8";
                        }, {
                            readonly internalType: "address";
                            readonly name: "nextPluginPointer";
                            readonly type: "address";
                        }];
                        readonly internalType: "struct SafeProtocolManager.PluginAccessInfo";
                        readonly name: "enabled";
                        readonly type: "tuple";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "start";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "pageSize";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }];
                    readonly name: "getPluginsPaginated";
                    readonly outputs: readonly [{
                        readonly internalType: "address[]";
                        readonly name: "array";
                        readonly type: "address[]";
                    }, {
                        readonly internalType: "address";
                        readonly name: "next";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "account";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "plugin";
                        readonly type: "address";
                    }];
                    readonly name: "isPluginEnabled";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "registry";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "selector";
                        readonly type: "bytes4";
                    }, {
                        readonly internalType: "address";
                        readonly name: "functionHandler";
                        readonly type: "address";
                    }];
                    readonly name: "setFunctionHandler";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooks";
                        readonly type: "address";
                    }];
                    readonly name: "setHooks";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newRegistry";
                        readonly type: "address";
                    }];
                    readonly name: "setRegistry";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "tempHooksData";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "hooksAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "preCheckData";
                        readonly type: "bytes";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "testFunction";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
            readonly TestSafeProtocolRegistryUnrestricted: {
                readonly address: "0x3727C87B2C2265649cCCca8cB03c961a09c97d99";
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "initialOwner";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "nonpayable";
                    readonly type: "constructor";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly name: "CannotAddModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "CannotFlagModule";
                    readonly type: "error";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4";
                        readonly name: "expectedInterfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "ModuleDoesNotSupportExpectedInterfaceId";
                    readonly type: "error";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleAdded";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "ModuleFlagged";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferStarted";
                    readonly type: "event";
                }, {
                    readonly anonymous: false;
                    readonly inputs: readonly [{
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "previousOwner";
                        readonly type: "address";
                    }, {
                        readonly indexed: true;
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "OwnershipTransferred";
                    readonly type: "event";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "acceptOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleType";
                        readonly type: "uint8";
                    }];
                    readonly name: "addModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "data";
                        readonly type: "bytes32";
                    }];
                    readonly name: "check";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "module";
                        readonly type: "address";
                    }];
                    readonly name: "flagModule";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly name: "listedModules";
                    readonly outputs: readonly [{
                        readonly internalType: "uint64";
                        readonly name: "listedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "flaggedAt";
                        readonly type: "uint64";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "moduleTypes";
                        readonly type: "uint8";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "owner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "pendingOwner";
                    readonly outputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "";
                        readonly type: "address";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [];
                    readonly name: "renounceOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "bytes4";
                        readonly name: "interfaceId";
                        readonly type: "bytes4";
                    }];
                    readonly name: "supportsInterface";
                    readonly outputs: readonly [{
                        readonly internalType: "bool";
                        readonly name: "";
                        readonly type: "bool";
                    }];
                    readonly stateMutability: "view";
                    readonly type: "function";
                }, {
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "newOwner";
                        readonly type: "address";
                    }];
                    readonly name: "transferOwnership";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
            };
        };
    }];
};
export default _default;
