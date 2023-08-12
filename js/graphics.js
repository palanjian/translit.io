let onPhone
adjust()
stars()

function adjust(){
    if(window.screen.width <= 768){
        onPhone = true
        document.getElementById('radio-wrapper-2').remove()
    }
    else{
        onPhone = false
    }
}

/* aesthetic functions */
addEventListener("resize", (event) => {
    resetStars()
    stars()
});

function stars(){
    const count = 200
    const section = document.getElementById('stars')
    var i = 0
    while(i < count){ 
        const star = document.createElement('i')
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 4
        star.style.left = x + 'px'
        star.style.top = y + 'px'
        star.style.width = 1+size+'px'
        star.style.height = 1+size+'px'
        star.className = 'star'
        const duration = Math.random() * 2
        star.style.animationDuration = 2 + duration + 's'
        section.appendChild(star)
        i++
    }
}

function resetStars(){
    for(const star of document.getElementsByClassName('star')){
        star.remove()
    }
}