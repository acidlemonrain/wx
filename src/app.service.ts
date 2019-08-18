import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(@Param('token') token): string {
		console.log('微信服务器get');
		console.log('token:', token);

		return 'hello wordl';
	}
}
