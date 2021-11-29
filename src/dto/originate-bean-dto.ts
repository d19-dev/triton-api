import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'
import { v4 as uuid } from 'uuid'

export class OriginataBeanDto {
  @ApiProperty({
    required: false,
    default: 'Назначается Asterisk при вызове',
    example: '88186140',
    description:
      'Идентификатор, который может использоваться для опознавания ответа, по умолчанию назначается Asterisk при обращении к AMI.',
  })
  @IsOptional()
  readonly actionid?: string

  @ApiProperty({
    required: false,
    default: process.env.TIMEOUT || '60000',
    example: '30000',
    description:
      'Как долго необходимо ожидать ответа на звонок, в миллисекундах.',
  })
  @IsOptional()
  readonly timeout?: string = process.env.TIMEOUT || '60000'

  @ApiProperty({
    required: false,
    default: process.env.DEFAULT_CALLER_ID,
    example: '4852556655',
    description:
      'Идентификатор вызывающего абонента, который должен быть задан для исходящего канала(номер, с которым выйдем на ТСОП).',
  })
  @IsOptional()
  readonly callerid?: string = process.env.DEFAULT_CALLER_ID

  @ApiProperty({
    required: false,
    default: '',
    example: 'userId=396223492',
    description:
      'Переменная канала. Допускается множество переменных в заголовке.',
  })
  @IsOptional()
  readonly variable?: string = ''

  @ApiProperty({
    required: false,
    default: '',
    example: 'TECH01',
    description: 'Код учетной записи.',
  })
  @IsOptional()
  readonly account?: string = ''

  @ApiProperty({
    required: false,
    default: true,
    example: false,
    description:
      'По умолчанию true, чтобы выполнять асинхронные вызовы. Асинхронное формирование вызовов позволяет создавать один или более вызовов, не ожидая немедленного ответа.',
  })
  @IsOptional()
  readonly async?: boolean = true

  @ApiProperty({
    required: false,
    default: '',
    example: 'g722,ulaw,alaw',
    description:
      'Список кодеков разделенный запятыми, используемых для этого звонка.',
  })
  @IsOptional()
  readonly codecs?: string = ''

  @ApiProperty({
    required: false,
    default: 'UUIDv4',
    example: 'b5806683-9beb-4119-83f5-d87fbbe9273d',
    description:
      'Назначить уникальный идентификатор каналу, по умолчанию назначается UUIDv4-идентификатор',
  })
  @IsOptional()
  readonly channelid?: string = uuid()

  @ApiProperty({
    required: false,
    default: 'UUIDv4',
    example: 'b5806683-9beb-4119-83f5-d87fbbe9273d',
    description:
      'Назначить уникальный идентификатор второму локальному каналу, по умолчанию назначается UUIDv4-идентификатор',
  })
  @IsOptional()
  readonly otherchannelid?: string = uuid()
}
