import * as React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column/Column";
import { Card } from "./components/Card/Card";


export const App = ()=> {
    return (
        <AppContainer>
            <Column text="To Do">
                <Card text="Generate App scaffold" />
            </Column>
            <Column text="In Proogress">
                <Card text="Learn Typescript" />
            </Column>
            <Column text="Done">
                <Card text="Begin to user static typing" />
            </Column>
        </AppContainer>
    )
}





