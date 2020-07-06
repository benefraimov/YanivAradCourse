let strUtils = require('./StrUtils.js')

exports.GetArrLength = function(arr)
{
    let totalSum = 0
    arr.forEach(element => {
        totalSum += strUtils.GetLength(element)
    });
    return totalSum;
}
