/*
8
1846

The rest of the object

Alejandro, purple
Melissa
undefined

Maya
Marisa
Chi

"Raindrops on roses"
"whiskers on kittens"
{"Bright copper kettles",
"warm woolen mittens",
"Brown paper packages tied up with strings"}

[20,10,30]

const {numbers: {a}}=obj;
const {numbers: {b}}=obj;

var arr = [1, 2];
[arr[0],arr[1]]=[arr[1],arr[0]]

*/

const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest});

