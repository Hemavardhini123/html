let person =
{
    Firstname:"Jeorge",
    Lastname:"Biden",
    Fullname:function()
    {
        return this. Firstname+ " "+this.Lastname;
    }
}
console.log(person.Fullname());