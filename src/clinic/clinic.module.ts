import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { ClinicProvider } from './clinic.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClinicController],
  providers: [ClinicService, ...ClinicProvider],
})
export class ClinicModule {}
