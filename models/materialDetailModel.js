module.exports = (sequelize, DataTypes) => {
    const MaterialDetail = sequelize.define("materialDetail", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT
        }
    });

    return MaterialDetail;
};
