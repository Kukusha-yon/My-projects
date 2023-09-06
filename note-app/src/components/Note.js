import {MdDeleteForever} from 'react-icons/md';

const Note = ({id, text, date, title,handleDeleteNote}) => {
    return (
        <div className="note">
            <span>{title}</span>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                {/* <div className="color">
                  <button className="button"/>
                  <button className="button-2"/>
                  <button className="button-3" />
                </div> */}
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            </div>
            
        </div>
    );
};
export default Note;