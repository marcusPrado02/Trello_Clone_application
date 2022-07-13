import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column/Column";
import { Card } from "./components/Card/Card";
import { AddNewItem } from "./components/AddNewItem/AddNewItem"
import { useAppState } from "./AppStateContext"
import { CustomDragLayer } from "./CustomDragLayer"


interface AppContainerProps {
    children: React.ReactNode | React.ReactNode[];
}


const App = (props: AppContainerProps) => {
    const { state, dispatch } = useAppState()
    
    return (
        <App>
            <CustomDragLayer />
                {state.lists.map((list, i) => {
                    <Column text={list.text} key={list.id} index={i} id={list.id}/>
                })}
                <AddNewItem 
                    toggleButtonText=" + Add another list" 
                    onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} 
                />
        </App>
    )
}


export default App



