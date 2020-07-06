

function getArray2(arr)
{
    let newArr = arr.map(x => 
        {
            let biggestNum = 0
            x.forEach(num => 
                {
                    if(num > biggestNum)
                    {
                        biggestNum = num;
                    }                
                })
                return biggestNum                            
        })
        return newArr
}

let new_arr = getArray2([[1,6,3,9],[6,12,5,21],[4,11,23,1]])
console.log(new_arr.filter(x => x>=9 && x<=21))