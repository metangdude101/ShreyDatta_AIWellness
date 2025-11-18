const response = await fetch('https://my-first-worker.shreydatta6.workers.dev');
var data = await response.text(); // Or .text() if the Worker returns plain text
console.log(data)

data.split("\n")

const header = document.getElementById("header")
header.innerHTML = "HELLO!"

const boxes = document.getElementsByClassName("box")
boxes[0].innerHTML = data[0]
boxes[1].innerHTML = data[1]
boxes[2].innerHTML = data[2]
boxes[3].innerHTML = data[3]
boxes[4].innerHTML = data[4]
boxes[5].innerHTML = data[5]
