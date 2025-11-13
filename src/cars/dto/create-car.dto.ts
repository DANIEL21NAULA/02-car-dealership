import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: `The brand must be a cool string` })
  readonly brand: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  readonly model: string;
}
