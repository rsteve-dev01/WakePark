const fs = require('fs');
const faker = require('faker');

const generateMessages = (numMessages = 50) => {
  const messages = [];
  for (let i = 0; i < numMessages; i++) {
    const message = {
      id: i + 1,
      text: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    };
    messages.push(message);

  }
  return messages;
};

const db = {
  messages: generateMessages(50), // Generate 50 random messages
};

fs.writeFileSync('db.json', JSON.stringify(db, null, 2), 'utf-8');
console.log('db.json has been populated with random messages.');