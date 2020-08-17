module.exports = function (sequelize, DataTypes) {
  const Guestlist = sequelize.define("Guestlist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Guestlist.associate = function (models) {
    // We're saying that a Guestlist should belong to an Event
    // A Guestlist can't be created without an Event due to the foreign key constraint
    Guestlist.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Guestlist;
};