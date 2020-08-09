module.exports = function (sequelize, DataTypes) {
  let Supplies = sequelize.define("Supplies", {
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    drink: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    present: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
  });

  Supplies.associate = function (models) {
    // We're saying that Supplies should belong to a GuestList
    // Supplies can't be created without a GuestList due to the foreign key constraint
    Supplies.belongsTo(models.guestlist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Supplies;
};
