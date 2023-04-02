'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Non optimized solution
    // let arrAm=[]
    // let timeObj = {
    //     01: 13,
    //     02: 14,
    //     03: 15,
    //     04: 16,
    //     05: 17,
    //     06: 18,
    //     07: 19,
    //     08: 20,
    //     09: 21,
    //     10: 22, 
    //     11: 23,
    //     12: 24,
    // }
    // let subStr = s.slice(8);
    // console.log(subStr)
    // if (subStr == "AM"){
    //         for(let i=0; i<s.length; i++){
    //             // return s[i];
    //             console.log("========>",s[i])
    //             arrAm.append(subStr[i])
    //         }
    //         let value = arrAm.join("")
    //         return value
    //     }

    // if (subStr == "PM"){
    //     for(let i=0; i<s.length; i++){
    //         if (timeObj[i] == s.slice(1)){
                
    //         }
    //     }
    
    // Write your code here, optimized solution
    const AM = 'AM'
    const PM = 'PM'
    let time = s.substr(8)
    let hour = s.substr(0,2)
    let minute = s.substr(3,2)
    let second = s.substr(6,2)
    if(parseInt(hour+minute) <= 1159 && time == PM){
        return `${parseInt(hour) + 12}:${minute}:${second}`
    } else if(hour == '12' && time == AM){
        return `00:${minute}:${second}`
    } 
    else {
        return `${hour}:${minute}:${second}`
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
