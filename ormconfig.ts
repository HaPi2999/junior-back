import {AdminUserEntity} from 'nestjs-admin'
import { DataSource } from "typeorm"
import pg from 'pg'

require('dotenv').config({path: '.env'})

const dataSource = new DataSource({
  type: 'postgres',
  driver: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [AdminUserEntity],
  logging: true
})

dataSource.initialize()

export default dataSource