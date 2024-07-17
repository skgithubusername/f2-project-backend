// module.exports = (sequelize, DataTypes) => {
//     const MaterialMain = sequelize.define("materialMain", {
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         image: {
//             type: DataTypes.STRING,
//         },
//         desc: {
//             type: DataTypes.TEXT,
//         },
//         specification: {
//             type: DataTypes.STRING, // Keeping it as STRING to store file path
//         },
//         purpose: {
//             type: DataTypes.TEXT,
//         },
//     });

//     return MaterialMain;
// };






module.exports = (sequelize, DataTypes) => {
    const MaterialMain = sequelize.define("materialMain", {
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
            type: DataTypes.STRING,
        },
        purpose: {
            type: DataTypes.TEXT,
        },
    });

    return MaterialMain;
};
