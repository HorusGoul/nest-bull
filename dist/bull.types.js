"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdvancedProcessor(processor) {
    return 'object' === typeof processor && !!processor.callback;
}
exports.isAdvancedProcessor = isAdvancedProcessor;
