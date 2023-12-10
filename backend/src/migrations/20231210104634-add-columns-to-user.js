module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'username', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),
      queryInterface.addColumn('Users', 'displayName', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'username'),
      queryInterface.removeColumn('Users', 'displayName'),
    ]);
  },
};
