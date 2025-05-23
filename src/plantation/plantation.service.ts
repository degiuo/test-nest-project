import { Injectable, Post } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { createNiggerDto } from 'src/nigger/dto/create-nigger.dto';
import { NiggerService } from 'src/nigger/nigger.service';
import { Nigger } from 'src/schema/nigger.schema';

@Injectable()
export class PlantationService {
    constructor(@InjectModel(Nigger.name) private niggerModel: mongoose.Model<Nigger>, private niggerService: NiggerService){}

    async add_nigger(dto: createNiggerDto): Promise<Nigger>{
        return this.niggerService.make_slave(dto);
    }

    async payday(){
        const val = await this.niggerModel.find();
        return this.niggerService.add_payment(1000);
    }

    async getNiggers(){
        const niggers = await this.niggerModel.find();
        return niggers;
    }
}
