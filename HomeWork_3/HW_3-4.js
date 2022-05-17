/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba' */

function isPalindrom(word){
    let count = 0
    word = word.toLowerCase();
    let reverse_word = word.split('').reverse().join('');   
    console.log(word);
    console.log(reverse_word);
    if (word == reverse_word){
        console.log("Палиндром");
    }else {
        console.log("НЕ палиндром");
    }
}

isPalindrom("aBba")