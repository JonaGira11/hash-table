// hash table for strings only problem
hash("")

/* 
function hash(key, arrayLength){
    let total = 0;
    for(let char of key) {
        let value = char.charCodeAt(0)-96
        total = (total + value) % arrayLength;
    }
    return total;
}
 */
console.log(hash('cyan',10))

// new hash that works with constant time and more random

/* function hash(key, arrayLength){
    let total = 0;
    let PRIME_NUM = 31;
    for(let i = 0; i < Math.min(key.lenght, 100); i ++) {
        let char = key[i];
        let value = char.charCodeAt(0)-96
        total = (total * PRIME_NUM + value) % arrayLength;
    }
    return total;
} */

// dealing with collisions hash table code 

class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size) ;
      }
      _hash(key){
        let total = 0;
        let PRIME_NUM = 31;
        for(let i = 0; i < Math.min(key.lenght, 100); i ++) {
            let char = key[i];
            let value = char.charCodeAt(0)-96
            total = (total * PRIME_NUM + value) % this.kepMap.length;
        }
        return total;
    }
    set(key,value){
       let index = this._hash(key)
        if(!this.keyMap[index ]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }

get(key){
    let index = this._hash(key)
if(this.keyMap[index]){
    return this.keyMap[index];
    for(let i = 0; i < this.keyMap[index].length; i ++ ){
        if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i]
        }
    }
}
    return undefined
}
values(){
    let valueArr =[];
    for(let i = 0; i, this.keyMap.length; i ++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                valueArr.push(this.keyMap[i][j][1])
            }
        }
    }
}


}