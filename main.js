const response = await fetch('https://my-first-worker.shreydatta6.workers.dev');
const data = await response.text(); // Or .text() if the Worker returns plain text
console.log(data)

document.getElementByID("header")innerHTML = "HELLO!"

