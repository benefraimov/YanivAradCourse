function funcA(arr)
{
    return new Promise(resolve => 
    {
        setTimeout(() => 
        {
            let total = 0
            arr.forEach(element => 
            {
                element.forEach(x => total += x)
            });
            resolve(total)
        },1000)
    })

}

async function funcB(arr)
{
    let total = await funcA(arr)
    return total*2
}

funcB([[1,6,3,9],[6,12,5,21],[4,11,23,1]]).then(x => console.log(x))
console.log("End")