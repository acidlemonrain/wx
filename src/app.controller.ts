import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

var parseString = require('xml2js').parseString;
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	get(@Req() req) {
		console.log(req.query);

		console.log('wechat is coming');
		return req.query.echostr;
	}

	@Post()
	postMessage(@Body() body, @Req() req) {
		console.log(body);
		req.setEncoding('utf8');
		req.on('data', function(xml) {
			parseString(xml, function(err, result) {
				console.log(result);
			});
		});

		console.log('wechat msg posting');
	}
}
