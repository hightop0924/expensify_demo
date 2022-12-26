import { frontEndContractsFile } from "../helper-hardhat-config"
import fs from "fs"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

        const fundMe = await ethers.getContract("Raffle")
        const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
        if (chainId in contractAddresses) {
            if (!contractAddresses[network.config.chainId!].includes(fundMe.address)) {
                contractAddresses[network.config.chainId!].push(fundMe.address)
            }
        } else {
            contractAddresses[network.config.chainId!] = [fundMe.address]
        }
        fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
        console.log("Front end written!")
    }
}
export default updateUI
updateUI.tags = ["all", "frontend"]
