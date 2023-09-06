import { useState } from "react";
const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    
    const handleChange = (event) => {
		setNoteText(event.target.value);
    }
    const handleTitle = (event) =>{
        setNoteTitle(event.target.value);
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0 && noteTitle.trim().length > 0){
            handleAddNote(noteText, noteTitle);
            setNoteText('');
            setNoteTitle('');
            const navMenu = document.querySelector(".new");
            navMenu.style.cssText = "opacity: 0";
        }
       
    }
    return (
        <div className="note new dis">
            <input rows = "1" cols = "1" placeholder="Ener your title here ..." value={noteTitle} onChange={handleTitle}></input>
            <textarea rows = "8" cols= "10" placeholder="Type to add a note.."  value={noteText}  onChange={handleChange} ></textarea>
            <div className="note-footer">
               <button className="save" onClick={handleSaveClick}>save</button>
            </div>
        
        </div>
    );
};
export default AddNote;