'use strict';

const { sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define('professores', {
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

    Sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    Matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },

  }, {

    tableName: "professores"

  })
  return Professor;
}