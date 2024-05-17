import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty()
  readonly address: string;
  @ApiProperty()
  readonly city: string;
  @ApiProperty()
  readonly lat: number;
  @ApiProperty()
  readonly long: number;
  @ApiProperty()
  readonly neighbourhood: string;
  @ApiProperty()
  readonly region: string;
  @ApiProperty()
  readonly state: string;
  @ApiProperty()
  readonly zip_code: string;
}

export class CreatePatientDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly has_avc: boolean;
  @ApiProperty()
  readonly investment_value: number;
  @ApiProperty()
  readonly another_condition: [];
  @ApiProperty({ type: () => Address })
  readonly address: Address;
  @ApiProperty()
  readonly created_at: Date;
}
