const notes =[{
    title:'Morning',
    body:'In the morning the sun shines'
},{
    title:'Eavning',
    body:'In the eaving the sun sets'
},{
    title:'Nihgt',
    body:'In the night the stars are shining'
}]

//in a comparison function
//-1 means the first goes before the second, 
// 1 means it goes after, and 0 means they're equivalent.
const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            
       return -1 
        }
        else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}



const findNote = function(notes,noteTitle){
    return notes.find(function(note,index){ 
        return (note.title).toUpperCase() === noteTitle.toUpperCase()
        
    })
}

const findNotes = function(array,query){
    return array.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
     })
}

sortNotes(notes)
console.log(notes)
//console.log(findNotes(notes, 'stars'));

