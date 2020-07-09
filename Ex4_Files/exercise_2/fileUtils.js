const jsonFile = require('jsonfile')

const readFile1 = function()
{
    jsonFile.readFile('person.json', function(err,data)
    {
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

readFile1()


