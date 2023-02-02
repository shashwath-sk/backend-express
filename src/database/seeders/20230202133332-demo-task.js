/* eslint-disable no-unused-vars */
'use strict';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Tasks', [
            {
                Title: 'Learn HTTP modules',
                isComplete: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Title: 'create server using HTTP modules',
                isComplete: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Title: 'create server using express framework',
                isComplete: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Title: 'Intialize sequelize database',
                isComplete: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Title: 'connect express to the database',
                isComplete: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Tasks', null, {});
    }
};