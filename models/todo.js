// This file was created with:
//  sequelize model:create --name Todo --attributes "title:string done:boolean userId:integer"
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // I need to let sequelize know that userId is a foreign key
        Todo.belongsTo(models.User, {
          foreignKey: 'userId',
        });
      }
    }
  });
  return Todo;
};
