import { Injectable, Param, Res, Req } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'hello wordl';
	}
}
