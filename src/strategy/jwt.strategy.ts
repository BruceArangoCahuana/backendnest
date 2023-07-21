import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { AuthRepository } from '../auth/auth.repository';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from '../auth/payload.interface';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('llavecita'),
    });
  }
  async validate(payload: PayloadInterface): Promise<IResponse<any>> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          shortname: payload.shortname,
        },
      });

      if (!user) {
        return {
          code: '001',
          message: 'error de session',
          data: null,
        };
      }
      return {
        code: '001',
        message: 'error de session',
        data: payload,
      };
    } catch (e) {
      console.log(e);
    }
  }
}
