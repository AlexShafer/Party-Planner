module.exports = function (sequelize, DataTypes) {
  const messageBoard = sequelize.define("messageBoard", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  messageBoard.associate = function (models) {
    // We're saying that a messageBoard should belong to an Event
    // A messageBoard can't be created without an Event due to the foreign key constraint
    messageBoard.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return messageBoard;
};