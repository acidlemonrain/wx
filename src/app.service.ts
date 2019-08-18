import { Injectable, Param, Res, Req } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(@Req() req): string {
		console.log('微信服务器get');
		console.log(req);

		return 'hello wordl';
	}
}
