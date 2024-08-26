function arrayRotation (array, rot){
for (let i = 0 ; i<rot; i++){
    let first = array.shift();
    array.push(first)
}

    console.log(array.join(` `));
    
}
arrayRotation([51, 47, 32, 61, 21], 2);
