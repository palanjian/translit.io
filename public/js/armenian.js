const map = new Map([
    //all 38 letters in the armenian alphabet
    ["ա", "a"], ["Ա", "A"], 
    ["բ", "b"], ["Բ", "B"],
    ["գ", "g"], ["Գ", "G"],
    ["դ", "d"], ["Դ", "D"],
    ["ե", "e"], ["Ե", "E"], 
    ["զ", "z"], ["Զ", "Z"],
    ["է", "e"], ["Է", "E"],
    ["ը", "y"], ["Ը", "Y"],
    ["թ", "t"], ["Թ", "T"],
    ["ժ", "j"], ["Ժ", "J"], 
    ["ի", "i"], ["Ի", "I"],
    ["լ", "l"], ["Լ", "L"],
    ["խ", "x"], ["Խ", "X"],
    ["ծ", "ts"], ["Ծ", "Ts"],
    ["կ", "k"], ["Կ", "K"],
    ["հ", "h"], ["Հ", "H"],
    ["ձ", "dz"], ["Ձ", "Dz"],
    ["ղ", "x"], ["Ղ", "X"],
    ["ճ", "ch"], ["Ճ", "Ch"],
    ["մ", "m"], ["Մ", "M"],
    ["յ", "y"], ["Յ", "Y"],
    ["ն", "n"], ["Ն", "N"],
    ["շ", "sh"], ["Շ", "Sh"],
    ["ո", "o"], ["Ո", "O"], 
    ["չ", "ch"], ["Չ", "Ch"],
    ["պ", "p"], ["Պ", "P"],
    ["ջ", "j"], ["Ջ", "J"],
    ["ռ", "r"], ["Ռ", "R"],
    ["ս", "s"], ["Ս", "S"],
    ["վ", "v"], ["Վ", "V"],
    ["տ", "t"], ["Տ", "T"],
    ["ր", "r"], ["Ր", "R"],
    ["ց", "c"], ["Ց", "C"],
    ["ւ", "v"], ["Ւ", "V"],
    ["փ", "p"], ["Փ", "P"],
    ["ք", "q"], ["Ք", "Q"],
    ["օ", "o"], ["Օ", "O"],
    ["ֆ", "f"], ["Ֆ", "F"],
    ["և", "ev"],

    //punctuation marks
    ["«", "\""], ["»", "\""],
    [",", ","], ["՝", ";"],
    ["․", ":"], ["։", "."],
    ["֊", "-"],

    //inline punctuation (difficult to implement without context)
    ["՜", ""], ["", "՛"],
    ["՞", ""],
]);

//all possible variations to transliteration style
const variations = new Map([
    ["խ", ["x", "kh"]], ["Խ", ["X", "Kh"]], 
    ["ե", ["e", "ye"]], ["Ե", ["E", "Ye"]],
    ["ը", ["y", "@"]], ["Ը", ["Y", "@"]],
    ["ժ", ["j", "zh"]], ["Ժ", ["J", "ZH"]],
    ["ծ", ["ts", "c"]], ["Ծ", ["Ts", "C"]], 
    ["ղ", ["x", "gh"]], ["Ղ", ["X", "Gh"]],
    ["ց", ["ts", "c"]], ["Ց", ["ts", "c"]]
]);


function westernize(){
    map.set("պ", "b"), map.set("Պ", "B"),
    map.set("բ", "p"), map.set("Բ", "P"),
    map.set("կ", "g"), map.set("Կ", "G"),
    map.set("գ", "k"), map.set("Գ", "K"),
    map.set("տ", "d"), map.set("Տ", "D"),
    map.set("դ", "t"), map.set("Դ", "T"),
    map.set("ձ", "ts"), map.set("Ձ", "Ts"),
    map.set("ծ", "dz"), map.set("Ծ", "Dz"),
    map.set("ճ", "j"), map.set("Ճ", "J"),
    map.set("ջ", "ch"), map.set("Ջ", "Ch"),
    map.set("ղ", "gh"), map.set("Ղ", "Gh"),
    map.set("խ", "kh"), map.set("Խ", "Kh")
}

function easternize(){
    map.set("պ", "p"), map.set("Պ", "P"),
    map.set("բ", "b"), map.set("Բ", "B"),
    map.set("կ", "k"), map.set("Կ", "K"),
    map.set("գ", "g"), map.set("Գ", "G"),
    map.set("տ", "t"), map.set("Տ", "T"),
    map.set("դ", "d"), map.set("Դ", "D"),
    map.set("ձ", "dz"), map.set("Ձ", "Dz"),
    map.set("ծ", "ts"), map.set("Ծ", "Ts"),
    map.set("ճ", "ch"), map.set("Ճ", "Ch"),
    map.set("ջ", "j"), map.set("Ջ", "J")
    if(document.getElementsByName("GhorX")[0] != null && document.getElementsByName("GhorX")[0].checked){map.set("ղ", "x"); map.set("Ղ", "X"); }
    if(document.getElementsByName("XorKh")[0] != null && document.getElementsByName("XorKh")[0].checked){ map.set("խ", "x"); map.set("Խ", "X"); }
}


//labels to be generated in setting menu for selecting transliteration variations
const radioData = [
    { name: "EorYe", labels: ["Ե as E", "Ե as Ye"], checkedIndex: 0, leftOrRight: "left", value: 'Ե', func: setVariation},
    { name: "YorAt", labels: ["Ը as Y", "Ը as @"], checkedIndex: 0, leftOrRight: "left", value: 'Ը', func: setVariation },
    { name: "JorZh", labels: ["Ժ as J", "Ժ as Zh"], checkedIndex: 0, leftOrRight: "left", value: 'Ժ', func: setVariation },
    { name: "CorTs", labels: ["Ց as Ts", "Ց as C"], checkedIndex: 0, leftOrRight: "left", value: 'Ց', func: setVariation },
    { name: "TsorC", labels: ["Ծ as Ts (Eastern)", "Ծ as C (Eastern)"], checkedIndex: 0, leftOrRight: "left", value: 'Ծ', func: setVariation },
    { name: "GhorX", labels: ["Ղ as X (Eastern)", "Ղ as Gh (Eastern)"], checkedIndex: 0, leftOrRight: "left", value: 'Ղ', func: setVariation  },
    { name: "XorKh", labels: ["Խ as X (Eastern)", "Խ as Kh (Eastern)"], checkedIndex: 0, leftOrRight: "left", value: 'Խ', func: setVariation },
    { name: "dialect", labels: ["Eastern Dialect", "Western Dialect"], checkedIndex: 0, leftOrRight: "right", func: setDialect },
];

const lastSelectedIndex = {}; //utilized for radioData selection
var dialect = getDialect()

function setVariation(letter) {
    const lowercaseLetter = letter.toLowerCase();
    const uppercaseLetter = letter.toUpperCase();
    if (map.get(lowercaseLetter) === variations.get(lowercaseLetter)[0]) {
      map.set(lowercaseLetter, variations.get(lowercaseLetter)[1]);
    } else if (map.get(lowercaseLetter) === variations.get(lowercaseLetter)[1]) {
      map.set(lowercaseLetter, variations.get(lowercaseLetter)[0]);
    }
  
    if (map.get(uppercaseLetter) === variations.get(uppercaseLetter)[0]) {
      map.set(uppercaseLetter, variations.get(uppercaseLetter)[1]);
    } else if (map.get(uppercaseLetter) === variations.get(uppercaseLetter)[1]) {
      map.set(uppercaseLetter, variations.get(uppercaseLetter)[0]);
    }
}

function getDialect(){
    let cookie = getCookie("dialect")
    if(cookie === "1"){
        westernize()
        return "1"
    }
    else{
        easternize()
        return "0"
    }
}

function setDialect(){
    if(dialect == "1"){
        dialect = "0"
        easternize()
    }
    else if(dialect == "0"){
        dialect = "1"
        westernize()
    }
}

function transliterate(){
    let translation = ""
    let final = ""
    let text = document.getElementById('input').value

    for(let i = 0; i < text.length; i++){
        let char = ""
        //add special cases
        //ու case
        if(i+1 < text.length && text[i] === "ո" && text[i+1] === "ւ") { char = 'u'; ++i }
        else if(i+1 < text.length && text[i] === "Ո" && text[i+1] === "Ւ") { char = 'U'; ++i }
        else if((i+1 < text.length) && ((text[i] === "Ո" && text[i+1] === "ւ"))) { char = 'U'; ++i }
        else if((i+1 < text.length) && ((text[i] === "ո" && text[i+1] === "Ւ"))) { char = 'u'; ++i }


        //vo case
        else if(i == 0 && text[i] === "Ո") char = 'Vo';
        else if(i == 0 && text[i] === "ո") char = 'vo';
        else if(i !=0 && i+1 < text.length && text[i] === "Ո" && (text[i-1] === " " || text[i-1] === '\n')) char = 'Vo';
        else if(i !=0 && i+1 < text.length && text[i] ===  "ո" && (text[i-1] === " " || text[i-1] === '\n')) char = 'vo';
        
        //IMPLEMENT: ե special case
        else if(text[i] === "ե" && map.get("ե") === "ye" && (i == 0)) char = 'ye';
        else if(text[i] === "Ե" && map.get("Ե") === "Ye" && (i == 0)) char = 'Ye';
        else if(text[i] === "ե" && map.get("ե") === "ye" && (i-1 >= 0) && (text[i-1] === " ")) char = 'ye';
        else if(text[i] === "Ե" && map.get("Ե") === "Ye" && (i-1 >= 0) && (text[i-1] === " ")) char = 'Ye';
        else if(text[i] === "ե" && map.get("ե") === "ye" && (i-1 >= 0) && (text[i-1] !== " ")) char = 'e';
        else if(text[i] === "Ե" && map.get("Ե") === "Ye" && (i-1 >= 0) && (text[i-1] !== " ")) char = 'E';
        else if(text[i] === "և" && map.get("ե") === "ye") char = "yev";
        else if(map.has(text[i])) char = map.get(text[i])
        else char = text[i]

        //capitalization standardization
        if(i+1 < text.length && isCaps(text[i]) && isCaps(text[i+1])) translation += char.toUpperCase()
        else if(i+1 == text.length && i-1 >= 0 && isCaps(text[i]) && isCaps(text[i-1])) translation += char.toUpperCase()
        else translation += char
    }

    document.getElementById("output").value = translation;
    return translation
}

