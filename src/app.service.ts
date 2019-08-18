import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		console.log('微信服务器get');
	}
}
