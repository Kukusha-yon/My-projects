import {nanoid} from 'nanoid';
import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(
    localStorage.getItem('react-notes-app-data')) || [
    {
      id: nanoid(),
      title: "This is title",
      text: "This is the first text that you are seeing.",
      date:"08/04/2023"
    },
    
  ]);
  const [searchText, setSearchText] =useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
  
  const addNote = (text, title) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
      title: title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
  const dleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
 return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText} />
        <NotesList  notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={dleteNote}/>
  
      </div>
    </div>
  )
};

export default App;
