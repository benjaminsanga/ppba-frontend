module.exports = (sequelize, Sequelize) => {
  const Organization = sequelize.define("organizations", {
    organizationsID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    nameOfOrganization: {
        type: Sequelize.STRING,
        allowNull: false
    },
    yearOfEstablishment: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    thematicAreas: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    registrationStatus: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  });
  return Organization;
};