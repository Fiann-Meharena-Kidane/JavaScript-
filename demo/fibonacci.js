
// 0, 1, 1, 2, 3, 5, 

const myList=[0, 1]

function fiboGenerate(n){

    for(let i=0; i < n-2; i++){
        let result= myList[myList.length-1] + myList[myList.length-2]
        myList.push(result)
    }
}
  
fiboGenerate(9);
console.log(myList)