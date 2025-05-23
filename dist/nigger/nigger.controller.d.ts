import { NiggerService } from './nigger.service';
import { Nigger } from 'src/schema/nigger.schema';
import { createNiggerDto } from './dto/create-nigger.dto';
export declare class NiggerController {
    private readonly niggerService;
    constructor(niggerService: NiggerService);
    create(dto: createNiggerDto): Promise<Nigger>;
    pay(): Promise<number>;
}
