let fs = require('fs');
let text = fs.readFileSync("input.txt", 'utf-8');
const array_of_lines = text.split(/\r?\n/);

function split_string(string){
    return [string.slice(0, string.length/2), string.slice(string.length/2)];
}

function get_common_characters(str1, str2) {
    const set1 = new Set(str1.split(''))
    const set2 = new Set(str2.split(''))

    const result = []
    for(let char of set1.values()){
        if(set2.has(char)) result.push(char)
    }
    return result
}

function part1(array){
    let all_common_characters = []
    let priority_alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var alphabetPosition = text => text.map(x => priority_alphabet.indexOf(x) + 1);
    for(let i = 0; i<array.length; i++){
        let strings = split_string(array[i])
        all_common_characters.push(...get_common_characters(strings[0], strings[1]))
    }
    return alphabetPosition(all_common_characters).reduce((partialSum, a) => partialSum + a, 0)

}

function get_common_characters_3strings(str1, str2, str3) {
    const set1 = new Set(str1.split(''))
    const set2 = new Set(str2.split(''))
    const set3 = new Set(str3.split(''))

    const result = []
    for(let char of set1.values()){
        if(set2.has(char) && set3.has(char)) result.push(char)
    }
    return result
}

function part2(array){
    let all_common_characters = []
    for(let i = 0; i<array.length; i+=3){
        all_common_characters.push(...get_common_characters_3strings(array[i+0], array[i+1], array[i+2]))
    }
    let priority_alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var alphabetPosition = text => text.map(x => priority_alphabet.indexOf(x) + 1);
    return alphabetPosition(all_common_characters).reduce((partialSum, a) => partialSum + a, 0)
}
console.log(part1(array_of_lines))
console.log(part2(array_of_lines))