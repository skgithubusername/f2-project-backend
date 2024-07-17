module.exports = (sequelize, DataTypes) => {
    const About = sequelize.define("about", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
        },
        subdesc: {
            type: DataTypes.TEXT,
        },
    });

    return About;
};
