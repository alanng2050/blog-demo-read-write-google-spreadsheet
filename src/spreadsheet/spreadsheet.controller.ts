import { Controller, Get } from '@nestjs/common';
import { SpreadSheetService } from './spreadsheet.service';

@Controller('sheet')
export class SpreadSheetController {
  constructor(private service: SpreadSheetService) {}

  @Get()
  get() {
    return this.service.getData({
      spreadsheetId: '1Xa4EHFL2ydK_iHCm9JJ42XqM4nEuTAJsk_jnsfEMYHc',
      range: 'Sheet1!A2:C5',
    });
  }
}
