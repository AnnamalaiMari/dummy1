
async function getData()
{
    return "hello"
}
console.log(getData());
getData().then((msg)=>console.log(msg))