import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientProvider } from './patient.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientController],
  providers: [PatientService, ...PatientProvider],
})
export class PatientModule {}
