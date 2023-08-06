const radioData = [
    { name: "XorKh", labels: ["Խ as X", "Խ as Kh"], checkedIndex: 0, leftOrRight: "left", value: 'Խ', func: setVariation },
    { name: "EorYe", labels: ["Ե as E", "Ե as Ye"], checkedIndex: 0, leftOrRight: "left", value: 'Ե', func: setVariation},
    { name: "YorAt", labels: ["Ը as Y", "Ը as @"], checkedIndex: 0, leftOrRight: "left", value: 'Ը', func: setVariation },
    { name: "JorZh", labels: ["Ժ as J", "Ժ as Zh"], checkedIndex: 0, leftOrRight: "left", value: 'Ժ', func: setVariation },
    { name: "TsorC", labels: ["Ծ as Ts", "Ծ as C"], checkedIndex: 0, leftOrRight: "left", value: 'Ծ', func: setVariation },
    { name: "GhorX", labels: ["Ղ as X", "Ղ as Gh"], checkedIndex: 0, leftOrRight: "left", value: 'Ղ', func: setVariation  },
    { name: "CorTs", labels: ["Ց as Ts", "Ց as C"], checkedIndex: 0, leftOrRight: "left", value: 'Ց', func: setVariation },
    { name: "dialect", labels: ["Eastern Dialect", "Western Dialect"], checkedIndex: 0, leftOrRight: "right", func: setDialect },
    { name: "conversationalOrAcademic", labels: ["Conversational", "Academic"], checkedIndex: 0, leftOrRight: "right"  },
];

getCheckedIndex()
generateRadioButtons();

function getCheckedIndex(){
    radioData.forEach((data) => {
        let cookie = getCookie(data.name)
        if(checkCookie(data.name)){
            data.checkedIndex = cookie
        }
        else data.checkedIndex = 0
    });
}

function generateRadioButtons(){
    const radioWrapper = document.getElementById('radio-wrapper');
    const radioWrapper2 = document.getElementById('radio-wrapper-2');

    radioData.forEach(data => {
        const container = document.createElement("div");
        container.classList.add("radio-container");
        data.labels.forEach((label, index) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = data.name;
            input.id = `toggle${label}`;
            if (index == data.checkedIndex) {
                input.checked = true;
            }
            input.addEventListener("click", () => {
                setCookie(data.name, index)
                //console.log(`Logged ${data.name}: ${index}`);
                data.func(data.value)
            });
            const labelElement = document.createElement("label");
            labelElement.htmlFor = `toggle${label}`;
            labelElement.innerText = label;
            container.appendChild(input);
            container.appendChild(labelElement);
        });
        if(data.leftOrRight === "left") radioWrapper.appendChild(container);
        else radioWrapper2.appendChild(container);
    });
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
}

function openTranslate(){
    document.getElementById('translator-container').style.display = 'block'
    document.getElementById('settings-container').style.display = 'none'
    transliterate()
}

/*
document.addEventListener("mousemove", parallax);
function parallax(event) {
    const sigma = 5;
    const x = (window.innerWidth - event.pageX * sigma) / 90;
    const y = (window.innerHeight - event.pageY * sigma) / 90;
    //console.log("x=" + x + "y=" + y)
    document.getElementById('hero-img').style.transform = `translateX(${x}px) translateY(${y}px)`;
} */