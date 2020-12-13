import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded,set]=useState(false);
  const [note,setNote] = useState({
    title:"",
    content:""
  });

function handleChange(event){
  const {name,value} = event.target;
  // console.log(name,value);
  setNote((previousVal)=>{return {
    ...previousVal,
    [name]:value
  }});
}

function handleClick(event){
  props.onAdd(note);
  setNote({
    title:"",
    content:""
  });
  event.preventDefault();
}

function showTitle(){
  set(true);
}

  return (
    <div>
      <form className="create-note">
        <input  type={isExpanded ? "input" : "hidden" } onChange={handleChange} name="title" placeholder="Title" value = {note.title} /> 
        <textarea onClick={showTitle}
         onChange={handleChange} 
         name="content" 
         placeholder="Take a note..."
         rows={isExpanded ? 3:1 }
         value = {note.content} />   
         <Zoom in = {isExpanded}>
        <Fab onClick={handleClick}>
        <AddIcon />
        </Fab>
        </Zoom> 
         </form>
    </div>
  );
}

export default CreateArea;


