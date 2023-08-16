import { Sequelize } from "sequelize";

const db = new Sequelize ('crudjs_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;