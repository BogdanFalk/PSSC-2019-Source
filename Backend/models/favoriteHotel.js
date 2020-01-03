module.exports = (sequelize, DataTypes) => {
    const favoriteHotel = sequelize.define('favoriteHotel', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    })
    favoriteHotel.associate = function (models)
    {
      favoriteHotel.belongsTo(models.User, {foreignKey: 'UserId', as: 'User'})
    }
    return favoriteHotel
  }
  