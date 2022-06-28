const crypto = require('crypto')
const sleep = require('./utils/sleep')
const colors = require('./utils/colors')
const geckoAPI = require('./utils/geckoapi')
const prompt = require("prompt-sync")({ sigint: true });

let isContinuing = true

async function main() {
    const bitcoinValue = await geckoAPI.getBitcoinPrice()

    while (isContinuing === true) {
        await sleep(5)

        const randomInt = crypto.randomInt(50,300)

        if (randomInt <= 1) {
            let randomBitcoinValue = crypto.randomInt(1,100)/100
            console.log(colors.fg.white + "> 0x" + crypto.randomBytes(20).toString('hex') + colors.fg.green + " > " + randomBitcoinValue.toString() + " BTC ($" + Math.round(bitcoinValue * randomBitcoinValue) + ")")
            let answer = prompt("> Continue? (y/n) ");
            if (answer.toLowerCase() === "y" || answer.toLowerCase() === "true") {
                isContinuing = true
            } else if (answer.toLowerCase() === "n" || answer.toLowerCase() === "false") {
                isContinuing = false
            }
        } else {
            console.log(colors.fg.white + "> 0x" + crypto.randomBytes(20).toString('hex') + colors.fg.red + " > 0.00 BTC ($0.00)")
        }
    }
    process.exit()
}

main()
