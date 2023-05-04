import React from 'react'; 
import Header from './Header'; 
import Note from './Note';
import Footer from './Footer';
import notes from '../notes.js'; 


function App () {
  return (
    <>
    <Header />
    {notes.map( (noteItem) => {
     return(<Note 
        title={noteItem.title}
        content={noteItem.content}   
        />)
    }) 
    } 
    <Footer />
    </>   
  );  
}

export default App; 
