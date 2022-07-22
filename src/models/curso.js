'use strict';

const { sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('cursos', {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4

    },

    Nome: {
      type: DataTypes.STRING,
      allowNull: false,

    },

  }, {

    tableName: "cursos"

  })
  return curso;
}