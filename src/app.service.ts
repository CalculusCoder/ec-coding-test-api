import { Injectable } from '@nestjs/common';
import database from './database';

type Group = {
  id: number;
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: number;
};

@Injectable()
export class AppService {
  getUsers(): Group[] {
    return database;
  }
}
