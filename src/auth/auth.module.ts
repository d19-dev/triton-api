import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { HeaderApiKeyGuard } from '../guards'

@Module({
  imports: [PassportModule],
  providers: [HeaderApiKeyGuard],
})
export class AuthModule {}
