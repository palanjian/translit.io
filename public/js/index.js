const radioData = [
    { name: "XorKh", labels: ["Խ as X", "Խ as Kh"], checkedIndex: 0 },
    { name: "EorYe", labels: ["Ե as E", "Ե as Ye"], checkedIndex: 0 },
    { name: "YorAt", labels: ["Ը as Y", "Ը as @"], checkedIndex: 0 },
    { name: "JorZh", labels: ["Խ as J", "Խ as Zh"], checkedIndex: 0 },
    { name: "TsorC", labels: ["Ծ as Ts", "Ծ as C"], checkedIndex: 0 },
    { name: "GhorX", labels: ["Ղ as X", "Ղ as X"], checkedIndex: 0 },
    { name: "CorTs", labels: ["Ց as Ts", "Ց as C"], checkedIndex: 0 },
];

function generateRadioButtons(){
    const radioWrapper = document.getElementById('radio-wrapper');

    radioData.forEach(data => {
        const container = document.createElement("div");
        container.classList.add("radio-container");
        data.labels.forEach((label, index) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = data.name;
            input.id = `toggle${label}`;
            if (index === data.checkedIndex) {
                input.checked = true;
            }   
            const labelElement = document.createElement("label");
            labelElement.htmlFor = `toggle${label}`;
            labelElement.innerText = label;
            container.appendChild(input);
            container.appendChild(labelElement);
        });
        radioWrapper.appendChild(container);
    });    
}

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

    document.getElementById('copy-icon').setAttribute("name","checkbox-outline");
    setTimeout(function(){document.getElementById('copy-icon').setAttribute("name","copy-outline")},1000);

}

function openSettings(){
    document.getElementById('translator-container').style.display = 'none'
    document.getElementById('settings-container').style.display = 'block'
    generateRadioButtons()
}

function openTranslate(){
    document.getElementById('translator-container').style.display = 'block'
    document.getElementById('settings-container').style.display = 'none'
}