import Note from "./Note";
import Plus from "./Plus-sign";
import AddNote from "./AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (<div className = "notes-list">
        {notes.map((note)=>(
            <Note id={note.id} title= {note.title} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}  />
        ))}
        <AddNote handleAddNote= {handleAddNote}/>
        <Plus />
    </div>
    );
};
export default NotesList;
