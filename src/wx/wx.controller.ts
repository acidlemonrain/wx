import { Controller, Get, Req } from '@nestjs/common';

@Controller('wx')
export class WxController {
	@Get()
	get(@Req() req) {
		console.log(req);
	}
}
