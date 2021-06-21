import react,{ChangeEvent, useState, } from "react";
import {addTodo} from "../reducers/todoSlice"
import {useAppDispatch, useAppSelector} from  "../app/hooks"
import Todoarr from "../components/Todoarr"
export interface Ipayload{
  name:string,
  age:number
}
const Todo = () => {
  const [Name, setName] = useState<string>("")
  const [Age, setAge] = useState<number>(0)
   const dispatch = useAppDispatch()
   const lists=useAppSelector((state)=>state.todo.lists)
  const changevalue = (e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name==="fname"){
      setName(e.target.value)
    }else{
      setAge(Number(e.target.value))
    }
  }
  const addData = ()=>{
    const obj={
      name:Name,
      age:Age
    }
    setAge(0)
    setName("")
    dispatch(addTodo(obj))
  }
  return (
    <div className="container">
      <div className="text-center ">
        <h3>Todo Typescript</h3>
        <input  name ="fname" type="text" value={Name} onChange={changevalue} /><br></br>
        <input name="age" className="mt-2" value={Age} type="number" onChange={changevalue} /><br></br>
        <button className="btn btn-primary mt-2" type="button" onClick={addData}>Click Me</button>
        {
          lists.map((val:Ipayload,index)=>{
            return <Todoarr val={val}key={index}/>
          })
        }
      </div>
    </div>
  );
};

export default Todo;
