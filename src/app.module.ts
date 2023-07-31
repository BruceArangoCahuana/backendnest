import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { InformationModule } from './information/information.module';
import { AuthModule } from './auth/auth.module';
import { SolcialnetworksModule } from './solcialnetworks/solcialnetworks.module';
import { GeneralModule } from './general/general.module';
import { ExperienceModule } from './experience/experience.module';
import { SubgeneralModule } from './subgeneral/subgeneral.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestportafolio',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    InformationModule,
    AuthModule,
    SolcialnetworksModule,
    GeneralModule,
    ExperienceModule,
    SubgeneralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
