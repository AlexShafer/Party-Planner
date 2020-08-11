module.exports = function (sequelize, DataTypes) {
  let Guestlist = sequelize.define("Guestlist", {
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
    Guestlist.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Guestlist.associate = function (models) {
    Guestlist.hasMany(models.Supplies, {
      onDelete: "cascade"
    });
  };

  return Guestlist;
};