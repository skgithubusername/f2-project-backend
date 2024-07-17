

module.exports = (sequelize, DataTypes) => {
    const Discovery = sequelize.define("discovery", {
      image: {
        type: DataTypes.STRING
    },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.TEXT,
      },
    });
  
    return Discovery;
  };
  