"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_admin_1 = require("nestjs-admin");
const typeorm_1 = require("typeorm");
require('dotenv').config({ path: '.env' });
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    driver: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [nestjs_admin_1.AdminUserEntity],
    logging: true
});
dataSource.initialize();
exports.default = dataSource;
//# sourceMappingURL=ormconfig.js.map