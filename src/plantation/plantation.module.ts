import { Module } from '@nestjs/common';
import { PlantationService } from './plantation.service';
import { PlantationController } from './plantation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nigger, NiggerSchema } from 'src/schema/nigger.schema';
import { NiggerModule } from 'src/nigger/nigger.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Nigger.name, schema: NiggerSchema }]),
    NiggerModule
  ],
  controllers: [PlantationController],
  providers: [PlantationService],
})
export class PlantationModule {}
