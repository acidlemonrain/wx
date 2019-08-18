import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WxModule } from './wx/wx.module';

@Module({
  imports: [WxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
