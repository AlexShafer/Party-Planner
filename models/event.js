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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    zipcode: {
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
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  Event.associate = function (models) {
    Event.hasOne(models.Guestlist);
  };

  return Event;
};