import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { deleteTodo, selector1 } from '../reducers/todoSlice'

interface Props {
    val: {
        name: string,
        age: number
    }
}
const Todoarr = ({ val }: Props) => {
    const dispatch = useAppDispatch()
    // Normal logic
    const data = useAppSelector(selector1)
    //reselect logic
    // const data=useAppSelector(dataselector);
    // To pevent rendering use reselect
    // console.log(data) 
    return (
        <div>
            My Name is {val.name} and Age is {val.age}
            <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(val.name))} type="button">Delete</button>
        </div>
    )
}

export default Todoarr
