const todos = [{
    text:'Go for a walk',
    compleated: true
},
 {
     text:'Write e-mails',
     compleated: false    
    }, 
     
 {
     text:'Have lunch',
     compleated: true}, 

     {text:'Se a friend',
     compleated: false
    },
     {text:'Plan tommorow',
    compleated: true
    }]


     const deleteTodo = function (todos,todoText){
        const index = todos.findIndex(function(todo){
            return todo.text.toLowerCase() === todoText.toLowerCase()
            
        })
           if(index > -1){
                todos.splice(index, 1)
            }
     }


    const getThingsToDo = function(array){
        return array.filter(function(item) {
          return item.compleated === false
        })
      
    } 


   const sortTodos = function (array){
        array.sort(function(a,b){
            if(a.compleated === false && b.compleated === true){
             return -1 
            }
           if (a.compleated === true && b.compleated === false){
               return 1
           }
           else{
               return 0
           }
        })

   }

    sortTodos(todos)
    console.log(todos)
   // console.log(getThingsToDo(todos))
    

 
    //deleteTodo(todos, 'Have lunch')// (the array you are looking for,the text to remove
    //console.log(todos)              