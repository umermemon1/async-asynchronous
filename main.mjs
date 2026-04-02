// Simple asynchronous JavaScript demo using Promise + async/await.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runDemo() {
  console.log('1) Start');

  const delayedMessage = wait(300).then(() => '2) Promise.then after 300ms');

  console.log('3) Doing other work while timer runs');

  const message = await delayedMessage;
  console.log(message);

  console.log('4) End');
}

runDemo().catch((error) => {
  console.error('Demo failed:', error);
});
