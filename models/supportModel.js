module.exports = (sequelize, DataTypes) => {
    const Support = sequelize.define("support", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Support;
};



