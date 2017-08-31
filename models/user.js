// This file was created with:
//  sequelize model:create --name User --attributes "name:string email:string bio:string"
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Todo, {
          foreignKey: 'userId',
        })
      }
    }
  });
  return User;
};
