import { Module } from '@nestjs/common';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Master } from './entities/master.entity';
import { Owner } from 'src/owners/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Master, Owner])],
  controllers: [MastersController],
  providers: [MastersService],
  exports: [TypeOrmModule],
})
export class MastersModule {}
