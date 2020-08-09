module.exports = function (sequelize, DataTypes) {
  let Guestlist = sequelize.define("Guestlist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    info2: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
  });

  Guestlist.associate = function (models) {
    // We're saying that Guestlist should belong to a event
    // Guestlist can't be created without a event due to the foreign key constraint
    Guestlist.belongsTo(models.event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Supplies;
};
