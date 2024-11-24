import { Injectable } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';
import * as path from 'node:path';

@Injectable()
export class SpreadSheetService {
  private service: sheets_v4.Sheets;

  constructor() {
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
      keyFilename: path.resolve(process.cwd(), 'service-account.json'),
    });

    this.service = google.sheets({ version: 'v4', auth });
  }

  async getData({
    spreadsheetId,
    range,
  }: {
    spreadsheetId: string;
    range: string;
  }) {
    try {
      const result = await this.service.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      return result.data.values;
    } catch (ex) {
      return ex;
    }
  }
}
