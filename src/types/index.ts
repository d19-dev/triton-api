export interface OriginateResponse {
  actionid: string
  response: 'Failure' | 'Success'
  channel: string
  context: string
  exten: string
  application: string
  data: string
  reason: string
  uniqueid: string
  calleridnum: string
  calleridname: string
}

export interface OriginateRequest {
  actionid?: string
  channel: string
  exten?: string
  context?: string
  priority?: string
  application?: string
  data?: string
  timeout?: string
  callerid?: string
  variable?: string
  account?: string
  earlymedia?: boolean
  async?: boolean
  codecs?: string
  channelid?: string
  otherchannelid?: string
}
