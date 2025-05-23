import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlantationService } from './plantation.service';
import { createNiggerDto } from 'src/nigger/dto/create-nigger.dto';
import { Nigger } from 'src/schema/nigger.schema';
import { get } from 'mongoose';

@Controller('plantation')
export class PlantationController {
  niggerService: any;
  constructor(private readonly plantationService: PlantationService) {}

  @Post()
  async create(@Body() dto: createNiggerDto): Promise<Nigger>{
    return this.plantationService.add_nigger(dto);
  }

  @Get()
  async payday(){
    return this.plantationService.payday();
  }

  @Get('all')
  async getNiggers(){
    return this.plantationService.getNiggers();
  }
}
