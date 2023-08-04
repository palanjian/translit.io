
document.addEventListener("mousemove", parallax);
function parallax(event) {
    const sigma = 5;
    const x = (window.innerWidth - event.pageX * sigma) / 90;
    const y = (window.innerHeight - event.pageY * sigma) / 90;
    //console.log("x=" + x + "y=" + y)
    document.getElementById('hero-img').style.transform = `translateX(${x}px) translateY(${y}px)`;
}

function copyToClipboard(){
    var text = document.getElementById('output');
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);
}