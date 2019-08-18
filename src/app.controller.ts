import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'body-parser';

var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');
var builder = new xml2js.Builder();
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
				console.log(JSON.parse(result));
				const xml = builder(JSON.parse(result));
				return xml;
			});
		});

		console.log('wechat msg posting');
	}
}
