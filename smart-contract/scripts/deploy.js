const { ethers } = require('hardhat')

const main = async () => {
    const dateFactory = await ethers.getContractFactory('Letsdate')
    const DateContract = await dateFactory.deploy()

    console.log('LETSDATE CONTRACT ADDRESS:', DateContract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log('Error in deploying Contract >> ', error)
        process.exit(1)
    })
