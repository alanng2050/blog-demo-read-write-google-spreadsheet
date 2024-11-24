import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpreadSheetModule } from './spreadsheet/spreadsheet.module';

@Module({
  imports: [SpreadSheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
