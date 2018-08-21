import { DoneCallback, Job } from 'bull';
export declare type BullQueueProcessor = BullQueueProcessorCallback | BullQueueAdvancedProcessor;
export declare type BullQueueProcessorCallback = ((job: Job, done?: DoneCallback) => void);
export declare type BullQueueAdvancedProcessor = {
    concurrency?: number;
    name?: string;
    callback: BullQueueProcessorCallback;
};
export declare function isAdvancedProcessor(processor: BullQueueProcessor): processor is BullQueueAdvancedProcessor;
