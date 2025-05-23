import { Monkey } from 'src/class/monkey.class';
import { createNiggerDto } from './dto/create-nigger.dto';
import { Nigger } from 'src/schema/nigger.schema';
import * as mongoose from 'mongoose';
export declare class NiggerService extends Monkey {
    private niggerModel;
    constructor(niggerModel: mongoose.Model<Nigger>);
    add_payment(money: number): Promise<number>;
    make_slave(dto: createNiggerDto): Promise<Nigger>;
}
