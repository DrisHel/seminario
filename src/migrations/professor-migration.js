'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('Professores', {

            id: {

                allowNull: false,

                primaryKey: true,

                type: Sequelize.UUID,

                default: Sequelize.UUID

            },

            Nome: {

                type: Sequelize.STRING

            },

            Sobrenome: {

                type: Sequelize.STRING

            },

            Email: {

                type: Sequelize.STRING

            },
            Matricula: {
                type: Sequelize.INTEGER
            },

            createdAt: {

                allowNull: false,

                type: Sequelize.DATE

            },

            updatedAt: {

                allowNull: false,

                type: Sequelize.DATE

            }

        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('Professores');

    }

};