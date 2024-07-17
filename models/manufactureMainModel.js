module.exports = (sequelize, DataTypes) => {
    const ManufactureMain = sequelize.define("manufactureMain", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        desc: {
            type: DataTypes.TEXT,
        },
        specification: {
            type: DataTypes.STRING, // Keeping it as STRING to store file path
        },
        purpose: {
            type: DataTypes.TEXT,
        },
    });

    return ManufactureMain;
};
