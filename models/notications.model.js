module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define("notifications", {
    uuid: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true,
    },
    title: {
		type: Sequelize.STRING,
		allowNull: false,
    },
    message: {
		type: Sequelize.STRING,
		allowNull: false,
    },
    image: {
		type: Sequelize.STRING,
		allowNull: false,
    },
    uploader: {
		type: Sequelize.STRING,
		allowNull: false,
    },
  });
  return Notification;
};
