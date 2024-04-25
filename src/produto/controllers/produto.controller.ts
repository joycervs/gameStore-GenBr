import { ProdutoService } from './../services/produto.service';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';

@Controller('/produto')
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }
}
