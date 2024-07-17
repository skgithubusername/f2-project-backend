








const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: console.log, 
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('connected ...');
  })
  .catch(err => {
    console.log('Error: ' + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models
db.discoverys = require('./discoveryModel')(sequelize, DataTypes);
db.rawDetails = require('./rawDetailModel')(sequelize, DataTypes);
db.materialDetails = require('./materialDetailModel')(sequelize, DataTypes);
db.manufactureDetails = require('./manufactureDetailModel')(sequelize, DataTypes);
db.abouts = require('./aboutModel')(sequelize, DataTypes);
db.aboutHomes = require('./aboutHomeModel')(sequelize, DataTypes);
db.supports = require('./supportModel')(sequelize, DataTypes);
db.rawMains = require('./rawMainModel')(sequelize, DataTypes);
db.materialMains = require('./materialMainModel')(sequelize, DataTypes);
db.manufactureMains = require('./manufactureMainModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('yes re-sync done !');
  });

module.exports = db;


























