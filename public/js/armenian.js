const map = new Map([
    ["ա", "a"], ["Ա", "A"], 
    ["բ", "b"], ["Բ", "B"],
    ["գ", "g"], ["Գ", "G"],
    ["դ", "d"], ["Դ", "D"],
    ["ե", "e"], ["Ե", "E"], //fix
    ["զ", "z"], ["Զ", "Z"],
    ["է", "e"], ["Է", "E"],
    ["ը", "y"], ["Ը", "Y"],
    ["թ", "t"], ["Թ", "T"],
    ["ժ", "j"], ["Ժ", "J"], //fix
    ["ի", "i"], ["Ի", "I"],
    ["լ", "l"], ["Լ", "L"],
    ["խ", "x"], ["Խ", "X"],
    ["ծ", "ts"], ["Ծ", "TS"],
    ["կ", "k"], ["Կ", "K"],
    ["հ", "h"], ["Հ", "H"],
    ["ձ", "dz"], ["Ձ", "DZ"],
    ["ղ", "x"], ["Ղ", "X"], //fix
    ["ճ", "ch"], ["Ճ", "CH"],
    ["մ", "m"], ["Մ", "M"],
    ["յ", "y"], ["Յ", "Y"],
    ["ն", "n"], ["Ն", "N"],
    ["շ", "sh"], ["Շ", "SH"],
    ["ո", "o"], ["Ո", "O"], //fix NOW
    ["չ", "ch"], ["Չ", "CH"],
    ["պ", "p"], ["Պ", "P"],
    ["ջ", "j"], ["Ջ", "J"],
    ["ռ", "r"], ["Ռ", "R"],
    ["ս", "s"], ["Ս", "S"],
    ["վ", "v"], ["Վ", "V"],
    ["տ", "t"], ["Տ", "T"],
    ["ր", "r"], ["Ր", "R"],
    ["ց", "c"], ["Ց", "C"],
    ["ւ", ""], ["Ւ", ""], //fix NOW
    ["փ", "p"], ["Փ", "P"],
    ["ք", "q"], ["Ք", "Q"],
    ["օ", "o"], ["Օ", "O"],
    ["ֆ", "f"], ["Ֆ", "F"]
]);


function transliterate(){
    let translation = ""
    let text = document.getElementById('input').value

    for(let i = 0; i < text.length; i++){
        //add special cases

        //ու case
        if(i+1 < text.length && text[i] === "ո" && text[i+1] === "ւ") translation += 'u'
        else if(i+1 < text.length && text[i] === "Ո" && text[i+1] === "Ւ") translation += 'U'
        else if((i+1 < text.length) && ((text[i] === "Ո" && text[i+1] === "ւ"))) translation += 'U';
        else if((i+1 < text.length) && ((text[i] === "ո" && text[i+1] === "Ւ"))) translation += 'u';


        //vo case
        else if(i == 0 && text[i] === "Ո") translation += 'Vo';
        else if(i == 0 && text[i] === "ո") translation += 'vo';
        else if(i !=0 && i+1 < text.length && text[i] === "Ո" && (text[i-1] === " " || text[i-1] === '\n')) translation += 'Vo';
        else if(i !=0 && i+1 < text.length && text[i] === "ո" && (text[i-1] === " " || text[i-1] === '\n')) translation += 'vo';
        
        else if(map.has(text[i])) translation += map.get(text[i])
        else translation += text[i]
    }
    document.getElementById("output").value = translation;
    return translation
}

function westernize(){ 
    map.set("պ", "b"), map.set("Պ", "B"),
    map.set("բ", "p"), map.set("Բ", "P"),
    map.set("կ", "g"), map.set("Կ", "G"),
    map.set("գ", "k"), map.set("Գ", "K"),
    map.set("տ", "d"), map.set("Տ", "D"),
    map.set("դ", "t"), map.set("Դ", "T"),
    map.set("ձ", "ts"), map.set("Ձ", "TS"),
    map.set("ծ", "dz"), map.set("Ծ", "DZ"),
    map.set("ճ", "j"), map.set("Ճ", "J"),
    map.set("ջ", "ch"), map.set("Ջ", "CH")
}
function easternize(){
    map.set("պ", "p"), map.set("Պ", "P"),
    map.set("բ", "b"), map.set("Բ", "B"),
    map.set("կ", "k"), map.set("Կ", "K"),
    map.set("գ", "g"), map.set("Գ", "G"),
    map.set("տ", "t"), map.set("Տ", "T"),
    map.set("դ", "d"), map.set("Դ", "D"),
    map.set("ձ", "dz"), map.set("Ձ", "DZ"),
    map.set("ծ", "ts"), map.set("Ծ", "TS"),
    map.set("ճ", "ch"), map.set("Ճ", "CH"),
    map.set("ջ", "j"), map.set("Ջ", "J")
}
