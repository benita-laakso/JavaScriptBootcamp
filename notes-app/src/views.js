import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes,getNotes} from './notes'

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


/////Render application notes

const renderNotes = () => {
    const notesEl  = document.querySelector('#notes')
    
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy )//We are defining notes as what ever comes back from calling sortNotes
    //Caling it with all the notes and the spesific filter that we want to use
    const filterdNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

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

const initializeEditPage = (noteId) =>{
    const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')
const notes = getNotes()
const note = notes.find((note) => note.id === noteId)

if(!note){// if falsy run this code, run code when there is no note
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = genrateLastEdited(note.updatedAt)


}

//Generate the last edited message
const genrateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}

export {generateNoteDOM,renderNotes,genrateLastEdited,initializeEditPage}