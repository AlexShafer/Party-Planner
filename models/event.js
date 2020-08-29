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
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Event.associate = function (models) {
    // Associating Event with Guestlist
    // When an Event is deleted, also delete associated Guestlist
    Event.hasMany(models.Guestlist, {
      onDelete: "cascade"
    });
  };

  Event.associate = function (models) {
    // Associating Event with its message board
    Event.hasMany(models.messageBoard, {
      onDelete: "cascade"
    });
  };

  return Event;
};