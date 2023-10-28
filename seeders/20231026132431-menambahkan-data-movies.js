'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Movies', [{
      title: 'Avatar',
      genres: 'Scifi',
      year: '2020',
      photo: '/assets/media',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Avatar 2',
      genres: 'Scifi',
      year: '2022',
      photo: '/assets/media',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Avatar 3',
      genres: 'Scifi',
      year: '2026',
      photo: '/assets/media',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
