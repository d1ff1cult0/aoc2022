let fs = require('fs');
let text = fs.readFileSync("input.txt", 'utf-8');
const split_array = text.split(/\r?\n/);

function max_count(array){
    let max = 0;
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] === ''){
            if(sum > max){
                max = sum
            }
            sum = 0
        }else{
            sum += parseInt(array[i]);
        }
    }
    return max;
}

function part2(array){
    let max = [0, 0, 0];
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] === ''){
            for(let j = 0; j<max.length; j++){
                if(sum > max[j]){
                    max[j] = sum;
                    break
                }
            }
            sum = 0
        }else{
            sum += parseInt(array[i]);
        }
    }
    let total = 0;
    for(let i = 0; i<max.length; i++){
        total += max[i];
    }
    console.log(max, total)
    return total
}

console.log(max_count(split_array))
console.log(part2(split_array))
