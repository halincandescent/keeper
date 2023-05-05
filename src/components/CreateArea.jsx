import React, {useState} from "react";

function CreateArea(props){
 
  const [note,setNote] = useState({
     title: "",
     content: ""
  });
  
  function handleChange(event) {
  const {name, value} = event.target; 

  setNote(prevValue => {
      return {
      ...prevValue,
      [name]: value
      
      };
    
  });
  
  }
  
  function submitNote(event){
   props.onAdd(note);      
   event.preventDefault();
  }
  

  return(
    <div>
     <form>
      <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
      <textarea onChange={handleChange} name="content" placeholder="Take a note here" rows="3" value={note.content} /> 
      <button type="submit" onClick={submitNote}>Add</button>
    </form>
   </div>
  );
}

export default CreateArea; 
