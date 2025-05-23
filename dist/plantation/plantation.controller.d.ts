import { PlantationService } from './plantation.service';
import { createNiggerDto } from 'src/nigger/dto/create-nigger.dto';
import { Nigger } from 'src/schema/nigger.schema';
export declare class PlantationController {
    private readonly plantationService;
    niggerService: any;
    constructor(plantationService: PlantationService);
    create(dto: createNiggerDto): Promise<Nigger>;
    payday(): Promise<number>;
    getNiggers(): Promise<(import("mongoose").Document<unknown, {}, Nigger, {}> & Nigger & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
