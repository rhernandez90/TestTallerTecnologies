function squares( array ){
    let squares = array.map( x => x*x);
    let newArray = [];
    


    for(let x = 0 ; x < squares.length; x ++)
    {

        let subArray = [];
        for(let ss = x ; ss < squares.length; ss ++){
            subArray.push(squares[ss])
        }
        newArray.push(menor(subArray))
    }
    
    return newArray;
}


function menor(array) { 

    let menor = array[0];

    for(let x = 1 ; x < array.length; x ++)
    {
        if(array[x] < menor)
            menor = array[x]
    }

    return menor;
}




array1 = [1, 2, 3, 5, 6, 8, 9]
array2 = [-2, -1]
array3 = [-10, -5, 0, 5, 10]

console.log(squares(array1));
console.log(squares(array2));
console.log(squares(array3));
