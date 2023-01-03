import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type Group = {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): Group[] {
    return this.appService.getUsers();
  }
}
