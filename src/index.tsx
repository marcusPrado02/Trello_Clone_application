import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AppStateProvider} from "./AppStateContext";
import { DndProvider } from "react-dnd"
import Backend from "react-dnd-html5-backend"


ReactDOM.render(
    <DndProvider backend={Backend} >
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </DndProvider>,
    document.getElementById("root"),
)




