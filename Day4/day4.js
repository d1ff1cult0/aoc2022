let fs = require('fs');
let text = fs.readFileSync("input.txt", 'utf-8');
const array_of_lines = text.split(/\r?\n/);

function part1(array){
    let overlap = 0;
    for(let i = 0; i<array.length; i++){
        const left = array[i].split(",")[0].split("-")
        const right = array[i].split(",")[1].split("-")
        if(parseInt(left[0]) > parseInt(right[0])){
            //Left lower bound bigger than right lower bound, so right upper bound should be higher than left upper bound
            if(parseInt(left[1]) <= parseInt(right[1])){
                overlap++
            }
        }else if(parseInt(left[0]) < parseInt(right[0])){
            //Left lower bound bigger than right lower bound, so right upper bound should be higher than left upper bound
            if(parseInt(left[1]) >= parseInt(right[1])){
                overlap++
            }
        }else{
            //If lower bounds are equal, there is always an overlap
            overlap++
        }
    }
    return overlap
}

function part2(array){
    let overlap = 0
    for(let i = 0; i<array.length; i++){
        const left = array[i].split(",")[0].split("-")
        const right = array[i].split(",")[1].split("-")
        if(parseInt(left[0]) >= parseInt(right[0]) && parseInt(left[0]) <= parseInt(right[1])){
            overlap++
        }else if(parseInt(right[0]) >= parseInt(left[0]) && parseInt(right[0]) <= parseInt(left[1])){
            overlap++
        }
    }
    return overlap
}

console.log(part1(array_of_lines))
console.log(part2(array_of_lines))