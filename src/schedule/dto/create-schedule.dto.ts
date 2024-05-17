import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty()
  readonly clinic_id: string;
  @ApiProperty()
  readonly datetime: Date;
  @ApiProperty()
  readonly doctor_responsible: string;
  @ApiProperty()
  readonly patient_id: string;
  @ApiProperty()
  readonly created_at: Date;
}
