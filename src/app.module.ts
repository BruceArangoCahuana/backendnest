import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { SolcialnetworksModule } from './solcialnetworks/solcialnetworks.module';
import { Solcialnetwork } from './solcialnetworks/entities/solcialnetwork.entity';
import { InformationModule } from './information/information.module';
import { Information } from './information/entities/information.entity';
import { GeneralModule } from './general/general.module';
import { General } from './general/entities/general.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'portafolio',
      entities: [User, Solcialnetwork, Information, General],
      synchronize: true,
    }),
    SolcialnetworksModule,
    InformationModule,
    GeneralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
