import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { OriginataBeanDto } from './originate-bean-dto'

export class OriginateDto extends OriginataBeanDto {
  @ApiProperty({
    required: true,
    example: 'Local/89601234567@external',
    description:
      'Имя канала, которому адресован вызов. Как только вызываемый канал отвечает на вызов, управление вызовом передается в заданные Exten/Context/Priority или Application.',
  })
  @IsNotEmpty({ message: 'Обязательный параметр' })
  readonly channel: string

  @ApiProperty({
    required: false,
    example: 'SIP/100',
    description:
      'Используемый добавочный номер (должны быть заданы значения Context и Priority).',
  })
  @IsOptional()
  readonly exten?: string

  @ApiProperty({
    required: false,
    example: 'default',
    description:
      'Используемый контекст (должны быть заданы значения Exten и Priority).',
  })
  @IsOptional()
  readonly context?: string

  @ApiProperty({
    required: false,
    example: '1',
    description:
      'Используемый приоритет (должны быть заданы значения Exten и Context).',
  })
  @IsOptional()
  readonly priority?: string

  @ApiProperty({
    required: false,
    example: 'Playback',
    description: 'Используемое приложение.',
  })
  @IsOptional()
  readonly application?: string

  @ApiProperty({
    required: false,
    example: 'welcome-message-playback',
    description:
      'Данные, которые должны быть переданы как параметры приложения (должно быть задано значение Application).',
  })
  @IsOptional()
  readonly data?: string

  @ApiProperty({
    required: false,
    example: true,
    description:
      'Включить предответное проключение(возможность запустить медиа-информацию (звук для телефонии) до установления сеанса SIP (до того, как был послан код ответа 2хх). В SIP любое RTP до прихода сообщения с кодом 200 ОК считается Early Media и не тарифицируется.)',
  })
  @IsOptional()
  readonly earlymedia?: boolean
}
