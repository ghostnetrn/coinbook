// read .env file into proces.env
require("dotenv").config()

const envalid = require("envalid")
var pjson = require("../package.json")

module.exports = envalid.cleanEnv(process.env, {
    apiKey: envalid.str(),
    apiSecret: envalid.str(),
    BOT_TOKEN: envalid.str(),
    BOT_CHAT: envalid.str(),
    botId: envalid.str({ default: "bot_1" }),
	montante: envalid.num({ default: "300.00" }),
	valorInicial: envalid.num({ default: "300.00" }),
	moedaCorrente: envalid.str({ default: "BRL" }),
	dataInicial: envalid.str({ default: "01/01/2021" }),
	minPercentualLucro: envalid.num({ default: "0.03" }),
	intervalo: envalid.num({ default: "2.5" }),
	host1: envalid.host({ default: "143.198.237.4" }),
    host2: envalid.host({ default: "64.227.99.7" }),
    port: envalid.port({
        default: 80,
        desc: "The port to start the server on",
    }),
    multibot: envalid.bool({ default: true }),
    VERSION: envalid.str({ default: pjson.version }),
})