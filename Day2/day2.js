let fs = require('fs');
let text = fs.readFileSync("input.txt", 'utf-8');
const split_array = text.split(/\r?\n/);

var dict = { 'X' : 1 , 'Y' : 2 , 'Z' : 3};
var dict2 = { 'A' : 1 , 'B' : 2 , 'C' : 3};
// Win if our_play-other_play = 1 or -2, Draw if 0, lose if -1 or 2

function calculate_score(array){
    let score = 0;
    for(let i = 0; i<array.length; i++){
        score += dict[array[i][2]]
        let outcome = dict[array[i][2]]-dict2[array[i][0]]
        if(outcome == 0){ //Draw
            score += 3
        }if((outcome == 1) || (outcome == -2)){ //Win
            score += 6
        }
    }
    return score;
}

var lose = {  'A' : 3 , 'B' : 1 , 'C' : 2};
var win = {  'A' : 2 , 'B' : 3 , 'C' : 1};


function part2(array){
    let score = 0;
    for(let i = 0; i<array.length; i++){
        switch (array[i][2]){
            case 'X':
                score += 0+lose[array[i][0]]
                break
            case 'Y': //Draw
                score += 3+dict2[array[i][0]]
                break
            case 'Z':
                score += 6+win[array[i][0]]
                break
        }
    }
    return score;
}

console.log(calculate_score(split_array))
console.log(part2(split_array))