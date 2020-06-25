//Global (name)
    //Local(name)
        //Local
    //Local
//Variables can have the same name in different scopes
let name ='Andrew'   

if(true){
    let name = 'Mike'
    if(true){
        name = 'Jen'
        console.log(name)
    }
}
if(true){
    console.log(name)
}

//You clib up the tree 
//looking first at parent then at granparent