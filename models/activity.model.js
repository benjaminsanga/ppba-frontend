module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activities", {
    activityID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    donorAgency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    projectTitle: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    projectDuration: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    projectLGAs: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    areaOfIntervention: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  });
  return Activity;
};