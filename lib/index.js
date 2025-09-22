"use strict";

const chalk = require("chalk")

console.clear();
console.log();

console.log(
  chalk.bold.cyanBright("rockleys") + " " +
  chalk.bold.blueBright("The Modification Baileys")
);

console.log(chalk.redBright(`
██████╗░░█████╗░░█████╗░██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
██████╔╝██║░░██║██║░░╚═╝█████═╝░
██╔══██╗██║░░██║██║░░██╗██╔═██╗░
██║░░██║╚█████╔╝╚█████╔╝██║░╚██╗
╚═╝░░╚═╝░╚════╝░░╚════╝░╚═╝░░╚═╝`)
);
console.log(chalk.yellowBright(`
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒▒▒▒
▒▒▒▒█▒▒▒▄██████████▄▒▒▒▒▒▒▒
▒▒▒█▐▒▒▒████████████▒▒▒▒▒▒▒
▒▒▒▌▐▒▒██▄▀██████▀▄██▒▒▒▒▒▒
▒▒▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒▒▒▒
▒▒▐┼▐▒▒██████████████▒▒▒▒▒▒
▒▒▐▄▐████─▀▐▐▀█─█─▌▐██▄▒▒▒▒
▒▒▒▒█████──────────▐███▌▒▒▒
▒▒▒▒█▀▀██▄█─▄───▐─▄███▀▒▒▒▒
▒▒▒▒█▒▒███████▄██████▒▒▒▒▒▒
▒▒▒▒▒▒▒██████████████▒▒▒▒▒▒
▒▒▒▒▒▒▒█████████▐▌██▌▒▒▒▒▒▒
▒▒▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`)
);
console.log(chalk.greenBright(`
██╗░░░░░███████╗██╗░░░██╗░██████╗
██║░░░░░██╔════╝╚██╗░██╔╝██╔════╝
██║░░░░░█████╗░░░╚████╔╝░╚█████╗░
██║░░░░░██╔══╝░░░░╚██╔╝░░░╚═══██╗
███████╗███████╗░░░██║░░░██████╔╝
╚══════╝╚══════╝░░░╚═╝░░░╚═════╝░`)
);

console.log(chalk.yellowBright(`Terima kasih telah menggunakan\nmodifikasi baileys dari saya\nCopyright © 2025 IMEY7,\nBy Miracle Of Heaven 🝳\nAll Rights Reserved.\n`));
console.log(chalk.yellowBright(`┌─❐ Contact On Telegram\n├───────────────────❐\n│ ◉ https://t.me/iameyjee\n└───────────────────❐`));
console.log(chalk.yellowBright(`┌─❐ Contact On WhatsApp\n├───────────────────❐\n│ ◉ https://wa.me/6282211655958\n└───────────────────❐`));
console.log(chalk.yellowBright(`┌─❐ WhatsApp Channel\n├───────────────────❐\n│ ◉ https://whatsapp.com/channel/0029ValAACJ11ulXkxIBqu3Y\n└───────────────────❐`));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;
const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return WAProto_1.proto; } });
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
