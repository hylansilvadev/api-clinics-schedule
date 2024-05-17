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

export class ResponsiblePerson {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly profession: string;
}

export class CreateClinicDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty({ type: () => Address })
  readonly address: Address;

  @ApiProperty({ type: () => ResponsiblePerson })
  readonly responsible_person: ResponsiblePerson;

  @ApiProperty()
  readonly created_at: Date;
}
