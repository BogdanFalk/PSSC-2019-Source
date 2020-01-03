module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define('Hotel', {
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
    // User.associate = function (models) {
    //   User.belongsToMany(models.Post, {
    //     through: models.UserPost,
    //     as: 'posts',
    //     foreignKey: 'userId'
    //   });
    // //   Candidate.belongsToMany(models.Company, {
    // //     through: models.CandidateCompany,
    // //     as: 'companies',
    // //     foreignKey: 'candidateId'
    // //   });
    // };
    return Hotel
  }
  