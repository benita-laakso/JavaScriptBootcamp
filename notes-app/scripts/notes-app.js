'use strict'

let notes = getSavedNotes() //let becouse we will be reasigning it

const filters ={
    serchText:'',
    sortBy: 'byEdited'//Defaultvalue
}

renderNotes(notes, filters)

 document.querySelector('#create-note').addEventListener('click',(e) => {
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
           saveNotes(notes)
           location.assign(`/edit.html#${id}`)

 })


document.querySelector('#serch-text').addEventListener('input', (e) => {
    filters.serchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change',(e) => {
    filters.sortBy = e.target.value ///One of the options in the dropdown
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) =>{

    if (e.key === 'notes'){
            //Reasigning the notes variable at the top of the page
            notes.JSON.parse(e.newValue)
            renderNotes(notes, filters)
    }
})

///////////////Using the moment Library
//https://momentjs.com/docs/

