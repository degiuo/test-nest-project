import { Module } from '@nestjs/common';
import { NiggerService } from './nigger.service';
import { NiggerController } from './nigger.controller';
import { Nigger, NiggerSchema } from 'src/schema/nigger.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nigger.name, schema: NiggerSchema }])],
  controllers: [NiggerController],
  providers: [NiggerService],
  exports: [NiggerService]
})
export class NiggerModule {}
