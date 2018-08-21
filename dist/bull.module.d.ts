import { DynamicModule } from '@nestjs/common';
import { BullModuleOptions } from './bull.interfaces';
export declare class BullModule {
    static forRoot(options: BullModuleOptions | BullModuleOptions[]): DynamicModule;
}
