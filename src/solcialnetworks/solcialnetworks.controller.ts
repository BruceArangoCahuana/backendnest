import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UsePipes, ValidationPipe
} from "@nestjs/common";
import { SolcialnetworksService } from './solcialnetworks.service';
import { CreateSolcialnetworkDto } from './dto/create-solcialnetwork.dto';
import { UpdateSolcialnetworkDto } from './dto/update-solcialnetwork.dto';
import { IResponse } from '../IResponse.interface';
import { Solcialnetwork } from './entities/solcialnetwork.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('redesSociales')
@Controller('solcialnetworks')
export class SolcialnetworksController {
  constructor(
    private readonly solcialnetworksService: SolcialnetworksService,
  ) {}
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('/create')
  create(
    @Body() createSolcialnetworkDto: CreateSolcialnetworkDto,
  ): Promise<IResponse<any>> {
    return this.solcialnetworksService.create(createSolcialnetworkDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Solcialnetwork>> {
    return this.solcialnetworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solcialnetworksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolcialnetworkDto: UpdateSolcialnetworkDto,
  ) {
    return this.solcialnetworksService.update(+id, updateSolcialnetworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solcialnetworksService.remove(+id);
  }
}
