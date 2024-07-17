module.exports = (sequelize, DataTypes) => {
    const AboutHome = sequelize.define("aboutHome", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
        },
    });

    return AboutHome;
};
