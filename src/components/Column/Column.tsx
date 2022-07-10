import React from "react"
import  { ColumnContainer, ColumnTitle } from "../../styles"

// Column Props
interface ColumnProps {
    text: string
}


// Column component
export const Column = ({ 
    text,
    children
}: React.PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    ) 
    
}