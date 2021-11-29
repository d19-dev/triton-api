import { OriginateDto } from 'src/dto/originate-dto'
import { PlayAnnouncementDto } from 'src/dto/play-announcement-dto'
import { OriginateRequest } from 'src/types'
import AMI = require('yana')

const ami = new AMI({
  port: parseInt(process.env.AMI_PORT) || 5038,
  host: process.env.AMI_HOST || 'localhost',
  login: process.env.AMI_USERNAME,
  password: process.env.AMI_PASSWORD,
  reconnect: false,
  events: false,
})

try {
  ami.connect()
} catch (e) {
  console.error(`Failed to connect: ${e}`)
}

const announcement = async (request: PlayAnnouncementDto) => {
  const context = process.env.CONTEXT || 'default'
  try {
    const response = await ami.send({
      action: 'originate',
      application: 'Playback',
      channel: `Local/${request.exten}@${context}`,
      ...request,
    })
    return {
      id: request.otherchannelid,
      ...response,
    } as unknown
  } catch (e) {
    throw Error(`Error while call originate: ${e}`)
  }
}

const originate = async (request: OriginateDto) => {
  try {
    const response = await ami.send({
      action: 'originate',
      ...request,
    })
    return {
      channelid: request.channelid,
      otherchannelid: request.otherchannelid,
      ...response,
    } as unknown
  } catch (e) {
    throw Error(`Error while call originate: ${e}`)
  }
}

export default { announcement, originate }
