
console.log('JavaScript yuklandi!');

function testJS() {
    document.getElementById("result").innerHTML = "JavaScript ishlayapti!";
}

document.getElementById("checkButton").addEventListener("click", testJS);
