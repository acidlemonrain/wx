import { Controller, Get, Req, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'body-parser';

var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');

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
	postMessage(@Body() body, @Req() req, @Res() response) {
		console.log(body);
		req.setEncoding('utf8');
		req.on('data', function(xml) {
			parseString(xml, function(err, result) {
				console.log(result);
				var builder = new xml2js.Builder({ cdata: true, rootName: 'xml', headless: true });
				const wxmsg = {
					ToUserName: result.xml.FromUserName,
					FromUserName: result.xml.ToUserName,
					CreateTime: result.xml.CreateTime,
					MsgType: 'text',
					Content: Math.random()
				};
				var xml = builder.buildObject(wxmsg);
				console.log('type', typeof xml);
				console.log('raw', xml);

				response.set('Content-Type', 'text/xml');
				response.send(xml);
			});
		});

		console.log('wechat msg posting');
	}
}
