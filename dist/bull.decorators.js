"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bull_utils_1 = require("./bull.utils");
function InjectQueue(name) {
    return common_1.Inject(bull_utils_1.getQueueToken(name));
}
exports.InjectQueue = InjectQueue;
