

 const btnStart = document.querySelector("[data-start]")
 const btnStop = document.querySelector("[data-stop]")
 let timerId = null



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  

  btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;    
    }, 1000);
    })

    btnStop.addEventListener("click", () => {
        clearInterval(timerId);
      });



    
