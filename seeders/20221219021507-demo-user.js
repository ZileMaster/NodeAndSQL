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
     await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          name: 'user1',
          email: 'user1@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'user2',
          email: 'user2@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'user3',
          email: 'user3@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'channel',
      [
        {
          id: 10,
          name: 'channel1',
          email: 'user1@test.com',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 20,
          name: 'channel2',
          email: 'user2@test.com',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'video',
      [
        {
          id: 100,
          title: 'video1ByUser1',
          channel_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 200,
          title: 'video2ByUser1',
          channel_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 300,
          title: 'video3ByUser2',
          channel_id: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('channel', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('video', null, bulkDeleteOptions);
     await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  },
};
