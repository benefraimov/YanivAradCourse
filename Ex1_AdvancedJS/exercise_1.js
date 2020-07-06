

function getArray1(arr)
{
    totalNum = 0
    arr.map(x => 
        {
            totalNum += x

        })
        return totalNum/arr.length;

}

let ex1 = getArray1([1,2,3,4,5,6])
console.log(ex1);