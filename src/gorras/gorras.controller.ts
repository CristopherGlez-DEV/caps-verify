import { Controller, Get, Render, Param } from '@nestjs/common';
import { GorrasService } from './gorras.service';
import { DropConfigService } from '../drops/drop-config.service';

@Controller('drops/:drop/validar')
export class GorrasController {
  constructor(
    private readonly gorrasService: GorrasService,
    private readonly dropConfig: DropConfigService,
  ) {}

  @Get(':id')
  @Render('validacion')
  async validarGorra(
    @Param('drop') drop: string,
    @Param('id') id: string,
  ) {
    const gorra = await this.gorrasService.getGorraById(id, drop);
    const dropInfo = this.dropConfig.getDrop(drop);
    return { gorra, drop: dropInfo };
  }

  @Get('alerta/:id')
  @Render('validacion-alerta')
  async validarConAlerta(
    @Param('drop') drop: string,
    @Param('id') id: string,
  ) {
    const gorra = await this.gorrasService.getGorraById(id, drop);
    const dropInfo = this.dropConfig.getDrop(drop);
    return { gorra, drop: dropInfo };
  }
}
