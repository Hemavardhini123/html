let pet =
{
    type:"dog",
    name:"Cheeki",
    legs:4,
    color:"Golden",
    food:{
        food1:"pedigree",
        food2:"mutton",
        food3:"Chicken",
        food4:"milk"

}
}
for(i in pet)
{
    console.log(pet[i]);
}
for(i in pet.food)
{
    console.log(pet.food[i]);
}