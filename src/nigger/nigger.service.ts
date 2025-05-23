import { Injectable } from '@nestjs/common';
import { Monkey } from 'src/class/monkey.class';
import { createNiggerDto } from './dto/create-nigger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Color, Nigger, NiggerSchema } from 'src/schema/nigger.schema';
import { Schema } from 'inspector/promises';
import * as mongoose from 'mongoose';
import { totalmem } from 'os';
import { NiggerModule } from './nigger.module';

@Injectable()
export class NiggerService extends Monkey{
    constructor(@InjectModel(Nigger.name) private niggerModel: mongoose.Model<Nigger>){
        super();
    }

    async add_payment(money: number): Promise<number>{
        const nigger = await this.niggerModel.find();

        const average = money / nigger.length;

        const _money = average * 0.001;

        const plantationMoney = average - _money;

        nigger.forEach(async (val) => {
            let total_balance = val.total_balance + _money;

            await this.niggerModel.findByIdAndUpdate(val.id, {'total_balance': total_balance});
        });

        return plantationMoney;
    }

    async make_slave(dto: createNiggerDto): Promise<Nigger>{
        const nigger = await this.niggerModel.create(dto);
        return nigger;
    }
}

