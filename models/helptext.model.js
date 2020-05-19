module.exports = (sequelize, DataTypes) => {
  const HelpTexts = sequelize.define(
    'HelpTexts',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      lang: { type: DataTypes.STRING },
      pageid: { type: DataTypes.STRING },
      helptext: { type: DataTypes.STRING },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at'
      }
    },
    {
      tableName: 'helptexts'
    }
  );

  return HelpTexts;
};
