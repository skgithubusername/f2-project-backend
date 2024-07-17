module.exports = (sequelize, DataTypes) => {
    const RawDetail = sequelize.define("rawDetail", {
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

    return RawDetail;
};

