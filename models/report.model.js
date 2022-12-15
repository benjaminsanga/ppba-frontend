module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("reports", {
        reportID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        reportedBy: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        reportType: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        summary: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        video: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return Report;
};