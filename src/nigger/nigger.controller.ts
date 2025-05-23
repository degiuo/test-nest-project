import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NiggerService } from './nigger.service';
import { Nigger } from 'src/schema/nigger.schema';
import { createNiggerDto } from './dto/create-nigger.dto';

@Controller('nigger')
export class NiggerController {
  constructor(private readonly niggerService: NiggerService) {}

  @Post()
  async create(@Body() dto: createNiggerDto): Promise<Nigger>{
    return this.niggerService.make_slave(dto);
  }

  @Get('pay')
  async pay(){
    return this.niggerService.add_payment(10000*0.001);
  }
}
