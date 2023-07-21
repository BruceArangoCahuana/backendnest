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
import { StackModule } from './stack/stack.module';
import { Stack } from './stack/entities/stack.entity';
import { LanguageModule } from './language/language.module';
import { Language } from './language/entities/language.entity';
import { ExperienceModule } from './experience/experience.module';
import { StudiesModule } from './studies/studies.module';
import { Experience } from './experience/entities/experience.entity';
import { Study } from './studies/entities/study.entity';
import { ProyectModule } from './proyect/proyect.module';
import { Proyect } from './proyect/entities/proyect.entity';
import { IconModule } from './icon/icon.module';
import { Icon } from './icon/entities/icon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'portafolio',
      entities: [
        User,
        Solcialnetwork,
        Information,
        General,
        Stack,
        Language,
        Experience,
        Study,
        Icon,
        Proyect,
      ],
      synchronize: true,
    }),
    SolcialnetworksModule,
    InformationModule,
    GeneralModule,
    StackModule,
    LanguageModule,
    ExperienceModule,
    StudiesModule,
    ProyectModule,
    Proyect,
    IconModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
