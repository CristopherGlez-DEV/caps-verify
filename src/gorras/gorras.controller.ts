import { Controller, Body, Get, Render, Param } from '@nestjs/common';
import { GorrasService } from './gorras.service';

@Controller('validar')
export class GorrasController {
  constructor(private readonly gorrasService: GorrasService) {}

  @Get(':id')
  @Render('validacion') // Usa la vista validacion.ejs
  async validarGorra(@Param('id') id: string) {
    const gorra = await this.gorrasService.getGorraById(id);
    return { gorra }; // Esto se pasa a la vista como variable
  }

  @Get('alerta/:id')
  @Render('validacion-alerta')
  async validarConAlerta(@Param('id') id: string) {
    const gorra = await this.gorrasService.getGorraById(id);
    return { gorra };
}

}
