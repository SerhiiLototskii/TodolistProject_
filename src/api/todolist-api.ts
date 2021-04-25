import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '6408b3a3-6577-4f97-aa9e-f7b63990ec1a'
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '6408b3a3-6577-4f97-aa9e-f7b63990ec1a'
    }
})


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<UpdateTodolistResponseType>(`todo-lists/${todolistId}`, {title: title})
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title: title})
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<DeleteTodolistResponseType>(`todo-lists/${todolistId}`)
        return promise
    },
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    }
}
