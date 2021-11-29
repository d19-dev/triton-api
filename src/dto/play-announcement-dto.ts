import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { OriginataBeanDto } from './originate-bean-dto'

export class PlayAnnouncementDto extends OriginataBeanDto {
  @ApiProperty({
    required: true,
    example: '89601234567',
    description: 'Телефонный номер. Передаётся в AMI "как есть".',
  })
  @IsNotEmpty({ message: 'Необходимо указать телефонный номер' })
  readonly exten: string

  @ApiProperty({
    required: false,
    default: process.env.DEFAULT_ANNOUNCEMENT || 'hello',
    example: 'welcome-message-playback',
    description: 'Имя аудио файла, который будет проигран при дозвоне.',
  })
  @IsOptional()
  readonly data?: string = process.env.DEFAULT_ANNOUNCEMENT || 'hello'
}
