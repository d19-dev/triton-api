import { DocumentBuilder } from '@nestjs/swagger'

const swagger = new DocumentBuilder()
  .setTitle(process.env.APP_TITLE)
  .setDescription(process.env.APP_DESCRIPTION)
  .setVersion(process.env.APP_VERSION || 'dev')
  .build()

export default swagger
