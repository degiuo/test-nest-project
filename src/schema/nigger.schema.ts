import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Color{
    BLACK = 'black',
    DARK = 'dark',
    INVISIBLE = 'invisible'
}

@Schema()
export class Nigger{
    @Prop()
    name: string;

    @Prop()
    total_balance: number;

    @Prop()
    color: Color;
}

export const NiggerSchema = SchemaFactory.createForClass(Nigger);