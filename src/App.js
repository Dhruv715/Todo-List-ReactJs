// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [data,setData] = useState("");
  const [arr,setArr] = useState([]);
  const [updateIndex,setUpdateIndex] =useState(null);
  const handleChange =()=>{
      if(data.trim() !==""){
        if(updateIndex !==null){
          // If Update Existing Todo List
          const newArr =[...arr];
          newArr[updateIndex] =data;
          setArr(newArr);
          setData("");
          setUpdateIndex(null);
        }
        else{
          //Add new Todo In This Case Code
        setArr ([...arr,data]);
        setData("");
      }
      }
  }
  const handleDelete =(index) =>{
      const newArr = [...arr];
      newArr.splice(index,1);
      setArr(newArr);
  }
  const handleUpdate = (index) =>{
        // set the main input box value accordignto todo
        setData(arr[index]);
        setUpdateIndex(index);
  }
  return (
        <>
          {/* Todo list input Box */}
      <div className="firstrow">
        <h1>Todo List</h1>
        <input type="text" name="todo" id="todo" placeholder="Enter todo here.." onChange={(e)=>setData(e.target.value)}  value={data}/>
        <button className="btnadd" onClick={()=>handleChange()}>
          {updateIndex !== null ? "Save Changes" :"Add"}
        </button>
      </div>
      <div className="datas">
        {
          arr.map((todo,index)=>
            <div className="row" key={index}>
            <h1>{todo}</h1>
            <button onClick={()=>handleUpdate(index)}>Update</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div> 
          )
        }
      </div>
        </>
  );
}

export default App;
