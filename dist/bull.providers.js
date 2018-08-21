"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bull = require("bull");
const bull_types_1 = require("./bull.types");
const bull_utils_1 = require("./bull.utils");
function createQueues(options) {
    return options.map((option) => ({
        provide: bull_utils_1.getQueueToken(option.name),
        useFactory: () => {
            const queue = new Bull(option.name ? option.name : 'default', option.options);
            option.processors.forEach((processor) => {
                if (bull_types_1.isAdvancedProcessor(processor)) {
                    const hasName = !!processor.name;
                    const hasConcurrency = !!processor.concurrency;
                    hasName && hasConcurrency ? queue.process(processor.name, processor.concurrency, processor.callback)
                        : hasName ? queue.process(processor.name, processor.callback)
                            : queue.process(processor.concurrency, processor.callback);
                }
                else {
                    queue.process(processor);
                }
            });
            return queue;
        },
    }));
}
exports.createQueues = createQueues;
