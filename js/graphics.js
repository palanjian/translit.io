let onPhone
adjust()
stars()
setLanguageHeaders()

function adjust(){
    if(window.screen.width <= 768){
        onPhone = true
        document.getElementById('radio-wrapper-2').remove()
    }
    else{
        onPhone = false
    }
}

function setLanguageHeaders(){
    if(onPhone == true){
        document.getElementById('l1').remove()
        document.getElementById('l2').innerText = 'English'
    }
    else{
        document.getElementById('l2').remove()
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
        const x = Math.floor(Math.random() * window.innerWidth) - 5
        const y = Math.floor(Math.random() * window.innerHeight) - 5

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