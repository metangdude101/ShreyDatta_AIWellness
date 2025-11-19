const response = await fetch('https://my-first-worker.shreydatta6.workers.dev');
const data = await response.text(); // Or .text() if the Worker returns plain text
console.log(data)

const splitted = data[0].split(".");

const header = document.getElementById("header")
header.innerHTML = "HELLO!"

const boxes = document.getElementsByClassName("box")
boxes[0].innerHTML = splitted[0] + splitted[1]
boxes[1].innerHTML = splitted[2] + splitted[3]
boxes[2].innerHTML = splitted[4] + splitted[5]
boxes[3].innerHTML = splitted[6] + splitted[7]
boxes[4].innerHTML = splitted[8] + splitted[9]
boxes[5].innerHTML = splitted[10] + splitted[11]






