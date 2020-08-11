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
    other: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Supplies.associate = function (models) {
    Supplies.belongsTo(models.Guestlist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Supplies;
};