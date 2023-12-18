module.exports = (sequelize, DataTypes) => {
  /**
   * @typedef {object} Message
   * @property {string} id
   * @property {string} text.required
   * @property {string} senderId.required
   * @property {string} receiverId.required
   * @property {string} createdAt - ISO Date
   * @property {string} updatedAt - ISO Date
   */
  const Message = sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
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
    },
    {}
  );
  Message.associate = function (models) {
    Message.belongsTo(models.User, {
      foreignKey: 'senderId',
      as: 'sender',
    });
    Message.belongsTo(models.User, {
      foreignKey: 'receiverId',
      as: 'receiver',
    });
  };
  return Message;
};
