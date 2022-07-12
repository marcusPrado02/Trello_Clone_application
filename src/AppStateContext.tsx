import React, { createContext, useReducer, useContext } from "react"
import { findItemIndexById } from "./utils/findItemIndexById"
import { moveItem } from "./moveItem"
import { v4 as uuidv4 } from 'uuid';
import { DragItem } from "./DragItem"

// _____________________________________________
//              Intefaces
// _____________________________________________

interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    tasks: Task[]

}

export interface AppState {
    lists: List[]
}

interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<Action>
    draggedItem?: DragItem | undefined
}

// _____________________________________________





// _____________________________________________
//               Createing App State
// _____________________________________________
const appData: AppState = {
    
    lists: [
        {
            id: "0",
            text:"To do",
            tasks: [{ id:"c0", text:"Generate app scaffold" }]
        },
        {
            id: "1",
            text:"In Progress",
            tasks: [{ id:"c2", text:"Learn Typescript" }]
        },
        {
            id: "2",
            text:"Done",
            tasks: [{ id:"c3", text:"Begin to use static typing"  }]
        },
    ],
    

}

// _____________________________________________



// _____________________________________________
//               Types Action
// _____________________________________________
type Action = 
        {
            type:"ADD_LIST"
            payload: string

        }
    |    {
            type:"ADD_TASK"
            payload: { text: string; taskId: string }

        }
    |   {
            type: "MOVE_LIST"
            payload: {
                dragIndex: number
                hoverIndex: number
            }

        }
    |   {
            type: "SET_DRAGGED_ITEM"
            payload:  DragItem | undefined
        }


// _____________________________________________




// _____________________________________________
//            Creating Reducer 
// _____________________________________________
const appStateReducer = (state: AppState, action: Action): AppState => {
    switch(action.type) {
        case "ADD_LIST": {

            return {
                ...state,
                lists: [
                    ...state.lists,
                    { id: uuidv4(), text: action.payload, tasks: [] }
                ]
            }

        }
        case "ADD_TASK": {

            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.taskId
            )
            state.lists[targetLaneIndex].tasks.push({
                id: uuidv4(),
                text: action.payload.text
            })
            return {
                ...state
            }
            
        }
        case "MOVE_LIST": {
            const { dragIndex, hoverIndex } = action.payload
            state.lists = moveItem(state.lists,dragIndex, hoverIndex )
            return { ...state }
        }
        case "SET_DRAGGED_ITEM": {
            return { ...state, draggedItem: action.payload }
        }
        default: {
            return state
        }
    }
}




// _____________________________________________




// _____________________________________________
//      Creating Context and  Provider  
// _____________________________________________
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)
    return (
        <AppStateContext.Provider value={{state, dispatch}}>
        {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}

// _____________________________________________


