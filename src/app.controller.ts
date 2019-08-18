import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	get(@Req() req) {
		console.log(req.query);

		console.log('wechat is coming');
		return req.query.echostr;
	}
}
