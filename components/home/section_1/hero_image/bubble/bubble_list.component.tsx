import React, { useEffect, useRef } from 'react'
import BubbleComponent from './bubble.component'
import { Bubble } from './bubble.styled'


function createBubbleArray() {
    const bubbleArray = []
    for (let i = 1; i <= 10; i++) {

        const bubbleComponent = <BubbleComponent key={i} delay={i/4}
            size={Math.floor(Math.random() * (100 - 30) + 30)}
      /*       Math.floor(Math.random() * (max - min) + min) */
            endOfX={Math.floor(Math.random() * (120 - 40) + 40)}
            endOfY={Math.floor(Math.random() * (-150 - 40) + 40)} />
       bubbleArray.push(bubbleComponent)
    }
    return bubbleArray
}

function BubbleList() {

    const bubbleRef = useRef()
    
    useEffect(() => {
           // @ts-ignore
        bubbleRef.current = createBubbleArray()
        
    }, [])

    if (!bubbleRef.current){
        return <></>
         // @ts-ignore
    } else return bubbleRef.current.map( (element) => {
        return element
    })

}

export default BubbleList