import { frontEndContractsFile } from "../helper-hardhat-config"
import fs from "fs"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const updateUI: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { network, ethers } = hre
    const chainId = "31337"

    if (process.env.UPDATE_FRONT_END) {
        console.log("Front end written!")
    }
}
export default updateUI
updateUI.tags = ["all", "frontend"]
