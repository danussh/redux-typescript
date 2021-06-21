import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Ipayload } from "../components/Todo";
import { createSelector } from 'reselect'

interface Inistate {
    lists: {
        name: string,
        age: number
    }[]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        lists: []
    } as Inistate,
    reducers: {
        addTodo: (state, action: PayloadAction<Ipayload>) => {
            state.lists=[...state.lists,action.payload]
        },
        deleteTodo:(state,action:PayloadAction<string>)=>{
            state.lists=[...state.lists.filter((val)=>{
                return val.name!==action.payload
            })]
        }
    },

})
export const selector1 = (state: RootState) => state.todo.lists
//reselect logic
//  const dataselector=(state: RootState) => state.todo.lists

// export const dataselector = createSelector(
//     selector1,
//     items => items
//   )

export const { addTodo,deleteTodo } = todoSlice.actions
export default todoSlice.reducer;

