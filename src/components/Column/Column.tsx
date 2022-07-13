import React,{ useRef } from "react"
import  { ColumnContainer, ColumnTitle } from "../../styles"
import { AddNewItem } from "../AddNewItem/AddNewItem"
import { useAppState } from "../../AppStateContext"
import { Card } from "../Card/Card"
import { useItemDrag } from "../../useItemDrag"
import { DragItem } from "../../DragItem"
import { useDrop } from "react-dnd"


// Column Props
interface ColumnProps {
    text: string
    index: number
    id: string
    isPreview?: boolean
}


// Column component
export const Column = ({ text, index,id, isPreview }: ColumnProps) => {
    const [, drop] = useDrop({
        accept: "COLUMN",
            hover(item: DragItem) {
                const dragIndex = item.index
                const hoverIndex = index
                if (dragIndex === hoverIndex) {
                    return
                }
                dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } \
            })
            item.index = hoverIndex
        }
    })

    const { state, dispatch } = useAppState()
    const ref = useRef<HTMLDivElement>(null)
    const drag = useItemDrag(ref)

    drag(drop(ref))

    return (
        <ColumnContainer
            isPreview={isPreview} 
            ref={ref} 
            isHidden={isHidden(state.draggedItem, "COLUMN", id)}
        >
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