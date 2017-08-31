// This file was created with:
//  sequelize migration:create --name add-user-id-to-todo
// I then had to add the `addColumn` and `removeColumn` calls

'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Todos',
        'userId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          // The `references` object informs sequelize that the field `userId` is related to the Users model's `id` field
          references: {
            model: 'Users',
            key: 'id'
          }
        }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Todos', 'userId');
  }
};
