const users = [
    {name:'mario',primeum:true},
    {name:'luigi',primeum:false},
    {name:'yoshi',primeum:true},
    {name:'toad',primeum:true},
    {name:'peach',primeum:false}
];

const getPremUsers = (users) =>{
    return users.filter(user=>user.primeum)
}
export {getPremUsers, users as default};