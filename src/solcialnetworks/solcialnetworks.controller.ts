import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolcialnetworksService } from './solcialnetworks.service';
import { CreateSolcialnetworkDto } from './dto/create-solcialnetwork.dto';
import { UpdateSolcialnetworkDto } from './dto/update-solcialnetwork.dto';

@Controller('solcialnetworks')
export class SolcialnetworksController {
  constructor(private readonly solcialnetworksService: SolcialnetworksService) {}

  @Post()
  create(@Body() createSolcialnetworkDto: CreateSolcialnetworkDto) {
    return this.solcialnetworksService.create(createSolcialnetworkDto);
  }

  @Get()
  findAll() {
    return this.solcialnetworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solcialnetworksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolcialnetworkDto: UpdateSolcialnetworkDto) {
    return this.solcialnetworksService.update(+id, updateSolcialnetworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solcialnetworksService.remove(+id);
  }
}
