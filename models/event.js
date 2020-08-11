module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Event.associate = function (models) {
    Event.hasMany(models.Guestlist, {
      onDelete: "cascade"
    });
  };

  return Event;
};