import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    task: [],
}

const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addtask: (state, action) =>{
            state.task.push({
                text : action.payload,
                completed: false,
            })
        },
        removetask: (state, action)=>{
             state.task = state.task.filter((item,index)=> index !== action.payload)
        },
        togglecomplete: (state, action) => {
            const task = state.task[action.payload]
            if(task){
                task.completed = !task.completed
            }
        }
    }
})


export default TodoSlice.reducer
export const { addtask , removetask , togglecomplete } = TodoSlice.actions