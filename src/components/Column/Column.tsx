import React from "react"
import  { ColumnContainer, ColumnTitle } from "../../styles"
import { AddNewItem } from "../AddNewItem/AddNewItem"
import { useAppState } from "../../AppStateContext"
import { Card } from "../Card/Card"

// Column Props
interface ColumnProps {
    text: string
    index: number
}


// Column component
export const Column = ({ text, index,id }: ColumnProps) => {    
    const { state, dispatch } = useAppState()

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem 
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch({ type:"ADD_TASK", payload: { text, taskID: id}})}
                dark
            />
        </ColumnContainer>
    ) 
    
}