import React, { useState, useEffect } from 'react'
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([])

 function fetchNotes(){
      axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.note);
      })
      .catch((err) => {
        console.error(err);
      });
    }


  useEffect(() => {
    console.log('hello integration');
    fetchNotes();
  }, []); // ← runs only once on mount

function handleSubmit(e){
  e.preventDefault()
  const {title,description} = e.target.elements;
  console.log(title.value,description.value);
  axios.post("http://localhost:3000/api/notes",{
    title:title.value,
    description:description.value
  })
  .then(res=>{
    console.log(res.data);
    
    fetchNotes()

  })

}
function handleDeleteNote(noteId){
  console.log(noteId);
  axios.delete("http://localhost:3000/api/notes/"+noteId)
  .then(res=>{
    console.log(res.data);
    fetchNotes()
  })
}

  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text"placeholder='enter title'/>
      <input name='description' type="text"placeholder='enter descritpion'/>
      <button>Create note</button>
    </form>
     <div className="notes">
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <button onClick={()=>{
            handleDeleteNote(note._id)
          }}>Delete</button>
        </div>
      ))}
    </div>
    </>
   
  )
}

export default App;