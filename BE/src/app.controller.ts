import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('apps/:filename')
  async ipa(@Res() response, @Param('filename') filename: string) {
    const url = await this.appService.download(filename);
    response.redirect(url);
  }
}
