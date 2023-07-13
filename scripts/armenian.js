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

function transArm(text){
    let translation = ""
    for(let i = 0; i < text.length; i++){
        //add special cases

        //ու case
        if(i+1 < text.length && text[i] === "ո" && text[i+1] === "ւ") translation += 'u'
        else if(i+1 < text.length && text[i] === "Ո" && text[i+1] === "Ւ") translation += 'U'
        else if((i+1 < text.length) && ((text[i] === "Ո" && text[i+1] === "ւ") && (text[i] === "ո" && text[i+1] === "Ւ"))) translation += 'u';

        //vo case
        else if(i == 0 && text[i] === "Ո") translation += 'Vo';
        else if(i == 0 && text[i] === "ո") translation += 'vo';
        else if(i !=0 && i+1 < text.length && text[i] === "Ո" && text[i-1] === " ") translation += 'Vo';
        else if(i !=0 && i+1 < text.length && text[i] === "ո" && text[i-1] === " ") translation += 'vo';
        
        else if(map.has(text[i])) translation += map.get(text[i])
        else translation += text[i]
    }
    return translation
}

module.exports = transArm;
