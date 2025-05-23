import mongoose from 'mongoose';
import { createNiggerDto } from 'src/nigger/dto/create-nigger.dto';
import { NiggerService } from 'src/nigger/nigger.service';
import { Nigger } from 'src/schema/nigger.schema';
export declare class PlantationService {
    private niggerModel;
    private niggerService;
    constructor(niggerModel: mongoose.Model<Nigger>, niggerService: NiggerService);
    add_nigger(dto: createNiggerDto): Promise<Nigger>;
    payday(): Promise<number>;
    getNiggers(): Promise<(mongoose.Document<unknown, {}, Nigger, {}> & Nigger & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
