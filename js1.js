const names = ["Niklas","Karl","Fætter peter","kaj","lars","Juhanes"]

const namesMutaded = names
.map(name => name.toUpperCase())
.filter(name => name.length <= 4)
.map(name => `<li>${name}</li>`)
.sort()
.join(",")

//console.log(namesMutaded)


function delay(){
    setTimeout(function(){console.log("Hi class")},2000);
}
delay();
console.log("What comes first, me or ..");