'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User, {
          foreignKey: 'userId',
        });
      }
    }
  });
  return Todo;
};
