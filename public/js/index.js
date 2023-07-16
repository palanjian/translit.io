
document.addEventListener("mousemove", parallax);
function parallax(event) {
    const sigma = 5;
    const x = (window.innerWidth - event.pageX * sigma) / 90;
    const y = (window.innerHeight - event.pageY * sigma) / 90;
    //console.log("x=" + x + "y=" + y)
    document.getElementById('hero-img').style.transform = `translateX(${x}px) translateY(${y}px)`;
}