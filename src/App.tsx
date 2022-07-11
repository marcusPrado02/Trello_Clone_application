import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column/Column";
import { Card } from "./components/Card/Card";
import { AddNewItem } from "./components/AddNewItem/AddNewItem"
import { useAppState } from "./AppStateContext"

export const App = () => {
    const { state, dispatch } = useAppState()
    
    return (
        <AppContainer>
            {state.lists.map((list, i) => {
                <Column text={list.text} key={list.id} index={i} />
            })}
            <AddNewItem 
                toggleButtonText=" + Add another list" 
                onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} 
            />
        </AppContainer>
    )
}





