import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import ami from './ami'
import { OriginateDto } from './dto/originate-dto'
import { PlayAnnouncementDto } from './dto/play-announcement-dto'

@Injectable()
export class AppService {
  originate(dto: OriginateDto) {
    try {
      return ami.originate(dto)
    } catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }
  announcement(dto: PlayAnnouncementDto) {
    try {
      return ami.announcement(dto)
    } catch (e) {
      console.log(e)
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }
}
