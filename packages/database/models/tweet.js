'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    tweet: {
      type: DataTypes.STRING,
      validate: {
        max: 140
      }
    }
  }, {
    sequelize,
    timestamps: true,
    underscored: true,
    tableName: 'tweets'
  });
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};
