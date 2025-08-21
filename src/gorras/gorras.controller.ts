import { Controller, Get, Render, Param } from '@nestjs/common';
import { GorrasService } from './gorras.service';
import { DropConfigService } from '../drops/drop-config.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('drops/:drop')
export class GorrasController {
  constructor(
    private readonly gorrasService: GorrasService,
    private readonly dropConfig: DropConfigService,
  ) {}

  @Get('idgorra/:id')
  @Render('validacion-alerta')
  @ApiParam({ name: 'drop', example: 'skull-ny' })
  @ApiParam({ name: 'id', example: 'prueba' })
  async validarConAlerta(
    @Param('drop') drop: string,
    @Param('id') id: string,
  ) {
    const gorra = await this.gorrasService.getGorraById(id, drop);
    const dropInfo = this.dropConfig.getDrop(drop);
    return { gorra, drop: dropInfo };
  }
}
