import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initalState={
  todos: [],
  isLoading: false,
}
const addTodo = createAsyncThunk('/', async (data) => {
  const res = await axios.post('http://localhost:3500/api/todo/add',data, {
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  return res.data;
})
const editTodo = createAsyncThunk('/', async ({formData, id}) => {
  console.log(id)
  const res = await axios.put(`http://localhost:3500/api/todo/edit/${id}`,formData, {
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  return res.data;
})
const fetchTodo = createAsyncThunk('/', async () => {
  const res = await axios.get('http://localhost:3500/api/todo/', {
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  return res.data;
})
const deleteTodo = createAsyncThunk('todo/addTodo', async (id) => {
  const res = await axios.delete(`http://localhost:3500/api/todo/delete/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  return res.data;
})

const todoSlice = createSlice({
  name: 'todo',
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.todos = action.payload.todos;
    })
    builder.addCase(fetchTodo.rejected, (state) => {
      state.isLoading = false;
    })
  },
})

export default todoSlice.reducer
export {fetchTodo, addTodo, editTodo, deleteTodo}

