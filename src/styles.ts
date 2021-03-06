import styled from 'styled-components'


//  ________________________________________
//        AddItemButtonProps Interface
//  ________________________________________

interface AddItemButtonProps {
    dark ?: boolean
}

//  ________________________________________




//  ________________________________________
//        DragPreviewConatinerProps Interface
//  ________________________________________
interface DragPreviewContainerProps{
    isPreview?: string | undefined
    isHidden?: boolean
}


//  ________________________________________






//  ________________________________________
//        Styles for App
//  ________________________________________

export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: #3179ba;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
`
//  ________________________________________



//  ________________________________________
//        Styles DragPreviewContainer
//  ________________________________________

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
   transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
   opacity: ${props => (props.isHidden ? 0 : 1)};
`

//  ________________________________________




//  ________________________________________
//        Styles for Columns
//  ________________________________________
export const CustomDragLayerContainer = styled.div`
    height: 100%;
    left 0;
    pointer-events: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`



export const ColumnContainer = styled(DragPreviewContainer)`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`
//  ________________________________________





//  ________________________________________
//        Styles for Cards
//  ________________________________________

export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`

//  ________________________________________




//  ________________________________________
//        Styles for the Form
//  ________________________________________

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-item: flex-start;
`

//  ________________________________________


//  ________________________________________
/*           Style for Inputs            */
//  _____________________________________/


//  ________________________________________
//        Style for NewItemInput
//  ________________________________________

export const NewItemInput= styled.input<AddItemButtonProps>`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`

//  ________________________________________







//  ________________________________________
/*            Style for Buttons           */
//  _____________________________________/


//  ________________________________________
//        Style for AddItemButton
//  ________________________________________

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${props => (props.dark ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    }
`

//  ________________________________________



//  ________________________________________
//        Style for AddItemButton
//  ________________________________________

export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`

//  ________________________________________




