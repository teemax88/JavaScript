/* 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list' */

function getWordStructure(word){
    let glas = ["а","е","ё","и","о","у","ы","э","ю","я","a","e","i","o","u"]
    let count_glas = 0
    let count_sogl = 0
    let spec = ["-","–"]
    word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        word[i].lowerCase  
        if (glas.includes(word[i])){
            count_glas += 1
        }
        else if (spec.includes(word[i])){
            continue
        }
        else {
            count_sogl += 1
        }
    }
    console.log("Слово", '"'+word+'"', "состоит из", count_glas, "гласных и", count_sogl, "согласных букв");
}

getWordStructure("Check-list")
getWordStructure("Case")
getWordStructure("case")
getWordStructure("Тестирование")
getWordStructure("Автоматизация")
