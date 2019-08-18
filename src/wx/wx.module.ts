import { Module } from '@nestjs/common';
import { WxController } from './wx.controller';

@Module({
  controllers: [WxController]
})
export class WxModule {}
