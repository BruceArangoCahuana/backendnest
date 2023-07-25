import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { AuthRepository } from '../auth/auth.repository';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from '../auth/payload.interface';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'llavecita',
    });
  }
  async validate(payload: PayloadInterface): Promise<IResponse<any>> {
    try {
      const { shortname } = payload;
      const user = await this.authRepository.findOne({
        where: {
          shortname: shortname,
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
