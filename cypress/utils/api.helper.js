const newPet = {
  id: 0,
  category: {
    id: 0,
    name: 'string',
  },
  name: 'doggie',
  photoUrls: ['string'],
  tags: [
    {
      id: 0,
      name: 'string',
    },
  ],
  status: 'available',
};
const baseUrl = 'https://petstore.swagger.io/v2';

module.exports = {
  newPet,
  baseUrl,
};
