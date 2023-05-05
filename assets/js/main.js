function timer () {
    
    function getTimeFromSeconds (segs) {
        const data = new Date(segs * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "GMT"
        });
    }
    
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;
    
    function startTimer () {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener("click", function (event) {
        const element = event.target;
    
        if (element.classList.contains("zerar")) {
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            relogio.classList.remove("pausado");
            segundos = 0;
        }
    
        if (element.classList.contains("iniciar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            startTimer();
        }
    
        if (element.classList.contains("pausar")) {
            clearInterval(timer);
            relogio.classList.add("pausado");
        }
    
    });

}

timer();