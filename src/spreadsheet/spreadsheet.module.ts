import { Module } from '@nestjs/common';
import { SpreadSheetController } from './spreadsheet.controller';
import { SpreadSheetService } from './spreadsheet.service';

@Module({
  controllers: [SpreadSheetController],
  providers: [SpreadSheetService],
})
export class SpreadSheetModule {}
