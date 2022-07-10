import React from "react"
import  { CardContainer } from "../../styles"

//  Card Props
interface CardProps {
    text: string
}

// Card  Component
export const Card = ({  text }: CardProps) => {
   return  <CardContainer>{text}</CardContainer>
}




