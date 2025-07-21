import { PartialType } from '@nestjs/mapped-types';
import { CreateGorraDto } from './create-gorra.dto';

export class UpdateGorraDto extends PartialType(CreateGorraDto) {}
