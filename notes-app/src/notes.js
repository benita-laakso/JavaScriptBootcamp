import uuidv4 from 'uuid/v4'
import moment from 'moment'
let notes = []

//Read existing notes from localStorage

const loadNotes =  () => {
    const notesJSON = localStorage.getItem('notes')
    try{  //return notesJSON !== null ? JSON.parse(notesJSON) : [] 
        return notesJSON ? JSON.parse(notesJSON) : [] 
        //if try throws an Error catch will run
    }catch(e){
        return []
    }
}
//Save the notes to localStorage
const saveNotes =  () => {
    //saving the new notes array to localStorage
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Expose notes from module
const getNotes = () => notes

const createNote = () =>{
    const id = uuidv4()
    const timestamp = moment().valueOf()
//The valueOf() method returns the primitive value of the specified object.
   notes.push({
       id: id,
       title:'',
       body:'',
       createdAt:timestamp,
       updatedAt:timestamp
       
   })
   saveNotes()
   return id
}

//Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1 ){
        notes.splice(noteIndex, 1)
        saveNotes()
    }
   }

//Sort your notes by one of the three ways
//Channged
const sortNotes = (sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a, b) =>{
            if(a.updatedAt > b.updatedAt){///A number that is a timestamp
            return -1
        }else if(a.updatedAt < b.updatedAt){
            return 1
        } else{
            return 0
        }

        })

    }
    else if(sortBy === 'byCreated'){
        return notes.sort((a,b) =>{
            if(a.createdAt > b.createdAt){
                return -1
            }else if(a.createdAt < b.createdAt){
                    return 1
            }
            else{
                return 0
            }
        })
    }
    
    else if (sortBy ==='alphabetically'){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
            }else{
                return 0
            }
        })
    }else{
        return notes
    }
}

const updateNote = (id,updates) => {
    const note = notes.find((note) => note.id === id)
    if(!note){
        return
    }
    if(typeof updates.title === 'string'){
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }
    if(typeof updates.body ==='string'){
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
    return note
}

notes = loadNotes()

export {getNotes,createNote,removeNote,sortNotes,updateNote}