import axios from "axios"
import { mutate } from "swr"

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

const delay = () => new Promise(res => setTimeout(() => res(), 3000))

export const todosUrlEndpoint = '/todos'

export const getTodos = async () => {
    const response = await todosApi.get(todosUrlEndpoint)
    return response.data
}

export const addTodo = async ({ userId, title, completed }) => {
    await delay()
    if (Math.random() < 0.5) throw new Error('err');
    const response = await todosApi.post(todosUrlEndpoint, { userId, title, completed })
    return response.data
}

export const updateTodo = async (todo) => {
    await delay()
    const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo)
    return response.data
}

export const deleteTodo = async (id) => {
    await delay()
    await todosApi.delete(`${todosUrlEndpoint}/${id}`, id)
    return;
}