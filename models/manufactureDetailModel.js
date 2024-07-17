module.exports = (sequelize, DataTypes) => {
    const ManufactureDetail = sequelize.define("manufactureDetail", {
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

    return ManufactureDetail;
};
