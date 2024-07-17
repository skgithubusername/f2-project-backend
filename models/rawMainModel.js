



// // models/rawMain.js

// module.exports = (sequelize, DataTypes) => {
//     const RawMain = sequelize.define("rawMain", {
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
//             type: DataTypes.STRING,
//         },
//         purpose: {
//             type: DataTypes.TEXT,
//         },
//     });

//     return RawMain;
// };





























// models/rawMain.js

module.exports = (sequelize, DataTypes) => {
    const RawMain = sequelize.define("rawMain", {
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
        button: { 
            type: DataTypes.JSON,

            
        },
    });

    return RawMain;
};
