import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {tasksReducer} from '../../state/tasks-reducer'
import {todolistsReducer} from '../../state/todolists-reducer'
import {v1} from 'uuid'
import {AppRootStateType} from '../../state/store'
import {TaskPriorities, TaskStatuses} from "../../api/task-api";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState :AppRootStateType= {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all",order: 0,addedDate: ''},
        {id: "todolistId2", title: "What to buy", filter: "all",order: 0,addedDate: ''}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", status: TaskStatuses.New,
                todoListId: "todolistId1",
                addedDate:'',
                description : '' ,
                startDate:'',
                deadline: '',
                order: 0,
                priority: TaskPriorities.Low},
            {id: v1(), title: "JS", status: TaskStatuses.New,
                todoListId: "todolistId",
                addedDate:'',
                description : '' ,
                startDate:'',
                deadline: '',
                order: 0,
                priority: TaskPriorities.Low}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", status: TaskStatuses.New,
                todoListId: "todolistId2",
                addedDate:'',
                description : '' ,
                startDate:'',
                deadline: '',
                order: 0,
                priority: TaskPriorities.Low},
            {id: v1(), title: "React Book",status: TaskStatuses.New,
                todoListId: "todolistId2",
                addedDate:'',
                description : '' ,
                startDate:'',
                deadline: '',
                order: 0,
                priority: TaskPriorities.Low}
        ]
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState );

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
