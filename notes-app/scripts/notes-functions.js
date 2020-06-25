//console.log(uuidv4())

'use strict'
//Avoids undefined variables becoming Leaked globals, by throwing errors
//Making code future proff, words that will be reserved in the future are caught as error

//Read existing notes from localStorage

const getSavedNotes =  () => {
    const notesJSON = localStorage.getItem('notes')
    try{  //return notesJSON !== null ? JSON.parse(notesJSON) : [] 
        return notesJSON ? JSON.parse(notesJSON) : [] 
        //if try throws an Error catch will run
    }catch(e){
        return []
    }
   
}


//Save the notes to localStorage
const saveNotes =  (notes) => {
         //saving the new notes array to localStorage
         localStorage.setItem('notes', JSON.stringify(notes))
}
//Remove a note from the list
const removeNote = (id) => {
 const noteIndex = notes.findIndex((note) => note.id === id)
 if(noteIndex > -1 ){
     notes.splice(noteIndex, 1)
 }
}

//Generate the DOM structure for a note
const generateNoteDOM = (note)=>{
   
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    /*const button = document.createElement('button')
    //Setup the remove button
button.textContent = 'x'
noteEl.appendChild(button)
button.addEventListener('click',() => {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes,filters)
})
*/ 

//Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    }else{ 
        textEl.textContent ='Unamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

//Set up the link

noteEl.setAttribute('href', `/edit.html#${note.id}`)
noteEl.classList.add('list-item')

//Set up the status message
statusEl.textContent = genrateLastEdited(note.updatedAt)
statusEl.classList.add('list-item__subtitle')
noteEl.appendChild(statusEl)

    return noteEl
}

//Sort your notes by one of the three ways
//Channged
const sortNotes = (notes, sortBy) => {
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

/////Render application notes

const renderNotes = (notes,filters) => {
    const notesEl  = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy )//We are defining notes as what ever comes back from calling sortNotes
    //Caling it with all the notes and the spesific filter that we want to use
    const filterdNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.serchText.toLowerCase()))

    notesEl.innerHTML = ''

if (filterdNotes.length > 0) {
    filterdNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        notesEl.appendChild(noteEl)
   })
} else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
}

}
//Generate the last edited message
const genrateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}