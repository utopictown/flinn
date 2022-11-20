import { Injectable } from '@nestjs/common';
import { SetMasterDto } from './dto/set-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Master } from './entities/master.entity';
import { Owner } from 'src/owners/entities/owner.entity';

@Injectable()
export class MastersService {
  constructor(
    @InjectRepository(Master)
    private mastersRepository: Repository<Master>,
    @InjectRepository(Owner)
    private ownersRepository: Repository<Owner>,
    private dataSource: DataSource,
  ) {}

  private response: { data: any; message: string } = { data: '', message: '' };

  async create(setMasterDto: SetMasterDto) {
    const existedOwner = await this.ownersRepository.findOneOrFail({ where: { id: setMasterDto.ownerId } });

    const masters = await this.mastersRepository.find();

    if (masters.length) {
      masters[0].owner = existedOwner;

      this.mastersRepository.save(masters[0]);
    } else {
      this.dataSource.transaction(async (manager) => {
        const master = new Master();
        master.owner = existedOwner;

        manager.save(master);
      });
    }

    return { ...this.response, message: 'Successfully set master' };
  }

  async findAll() {
    const result = await this.mastersRepository.find()[0];

    return { ...this.response, data: result };
  }
}
