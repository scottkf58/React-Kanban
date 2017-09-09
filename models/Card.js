module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    assignedTo: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Card;
};

