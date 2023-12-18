module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Messages', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.literal('uuid_generate_v1()'),
        allowNull: false,
        primaryKey: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      senderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      receiverId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Messages');
  },
};
