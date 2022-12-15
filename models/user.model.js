module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        birthDate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        identificationMeans: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        identificationNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        securityQuestion: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        securityQuestionAnswer: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    });
    return User;
};