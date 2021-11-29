import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { OriginateDto } from './dto/originate-dto'
import { PlayAnnouncementDto } from './dto/play-announcement-dto'

@ApiTags('Asterisk AMI')
@Controller('ami')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary:
      'Формирует исходящий вызов из Asterisk и соединяет канал с контекстом/добавочным номером/приоритетом или приложением диалплана.',
  })
  @ApiResponse({ status: 200, type: Object })
  @UseGuards(AuthGuard('api-key'))
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/originate')
  async getOriginate(@Query() dto: OriginateDto): Promise<unknown> {
    return this.appService.originate(dto)
  }

  @ApiOperation({
    summary:
      'Формирует исходящий вызов из Asterisk и соединяет канал с контекстом/добавочным номером/приоритетом или приложением диалплана.',
  })
  @ApiResponse({ status: 200, type: Object })
  @UseGuards(AuthGuard('api-key'))
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/originate')
  async postOriginate(@Body() dto: OriginateDto): Promise<unknown> {
    return this.appService.originate(dto)
  }

  @ApiOperation({
    summary:
      'Формирует исходящий вызов из Asterisk и соединяет канал с приложением playback.',
  })
  @ApiResponse({ status: 200, type: Object })
  @UseGuards(AuthGuard('api-key'))
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/play-announcement')
  async getAnnouncement(@Query() dto: PlayAnnouncementDto): Promise<unknown> {
    return this.appService.announcement(dto)
  }

  @ApiOperation({
    summary:
      'Формирует исходящий вызов из Asterisk и соединяет канал с приложением playback.',
  })
  @ApiResponse({ status: 200, type: Object })
  @UseGuards(AuthGuard('api-key'))
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/play-announcement')
  async postAnnouncement(@Body() dto: PlayAnnouncementDto): Promise<unknown> {
    return this.appService.announcement(dto)
  }
}
