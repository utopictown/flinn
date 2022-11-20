import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MastersService } from './masters.service';
import { SetMasterDto } from './dto/set-master.dto';
import { Public } from 'src/utils';

@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Post()
  @Public()
  create(@Body() setMasterDto: SetMasterDto) {
    return this.mastersService.create(setMasterDto);
  }

  @Get()
  findAll() {
    return this.mastersService.findAll();
  }
}
