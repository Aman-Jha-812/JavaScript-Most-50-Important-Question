const arr = [
    {name:'aman',gender:'male'},
    {name:'varsha',gender:'female'},
    {name:'alooarjun',gender:'male'},
    {name:'lali',gender:'female'},
    {name:'tannu',gender:'female'},
    {name:'jha',gender:'male'},

]

let gend = arr.filter((element)=>{
    return element.gender==='male'
})
console.log(gend)