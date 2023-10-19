import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deployer, owner } = await getNamedAccounts();
    const { deploy } = deployments;
    const testRegistry = await deploy("SafeProtocolRegistryWrapper", {
        from: deployer,
        args: [owner],
        log: true,
        deterministicDeployment: true,
    });

    await deploy("SafeProtocolManagerWrapper", {
        from: deployer,
        args: [owner, testRegistry.address],
        log: true,
        deterministicDeployment: true,
    });

    await deploy("SafeStreetWrapper", {
        from: deployer,
        args: [testRegistry.address],
        log: true,
        deterministicDeployment: true,
    });

    await deploy("SafeStreetToken", {
        from: deployer,
        args: ["0x958543756A4c7AC6fB361f0efBfeCD98E4D297Db"],
        log: true,
        deterministicDeployment: true,
    });
};

deploy.tags = ["wrapper"];
export default deploy;
