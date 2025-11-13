import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsUUID()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  readonly id?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: `The brand must be a cool string` })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  readonly brand?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  readonly model?: string;
}
