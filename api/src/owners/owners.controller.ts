import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { FindQueryDto } from './dto/find-query.dto';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @Post('/favorite/:id')
  setFavorite(@Param('id') id: number) {
    return this.ownersService.addFavorite(id);
  }
  @Post('/unfavorite/:id')
  setUnfavorite(@Param('id') id: number) {
    return this.ownersService.removeFavorite(id);
  }

  @Get()
  findAll(@Query() query: FindQueryDto) {
    return this.ownersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ownersService.findOne(id);
  }
}
