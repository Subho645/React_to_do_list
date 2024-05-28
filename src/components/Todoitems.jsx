import './CSS/TodoItems.css'
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";


const Todoitems = ({no,display,text,setTodos}) => {

  const deleteTodo=(no) =>{
    let data =JSON.parse( localStorage.getItem("todos"));
    data=data.filter((todo)=> todo.no!==no);
    setTodos(data);
  }
  const toggle =(no) =>{
    let data =JSON.parse( localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++)
    {
      if(data[i].no===no)
       {
        if(data[i].display==="") {
          data[i].display="line-through";
        }
        else{
          data[i].display="";
        }
        break;
       }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt='' style={{ width: '50px', height: '50px' }} />:<img src={tick} alt='' style={{ width: '50px', height: '50px' }} />}
        
        <div className="todoitems-text" style={{ fontWeight: 'bold' }}>{text} </div>


      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt='' style={{ width: '50px', height: '50px' }} />
    </div>
  )
}

export default Todoitems