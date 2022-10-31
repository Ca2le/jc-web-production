import React, { useEffect, useState, useContext } from 'react'
import { keyframes } from 'styled-components'
import theme from '../../../../../global/styles/theme';
import * as CL from '../../../../components.libary'
import { Bubble, BubbleContainer, InnerBubbleContainer, Reflection } from './bubble.styled'

interface IBubbleContainer {
    size: number;
    delay: number;
    endOfY: number;
    endOfX: number;

}

function BubbleComponent({ delay, size, endOfY, endOfX }: IBubbleContainer) {
    const { device } = useContext(CL.ScreenSizeContext)
    const [animationDone, setAnimationDone] = useState(false)
    useEffect( () => {
        setTimeout( () => {
            setAnimationDone(true)
        }, delay*1000)
       
    },[])
    console.log(device)
    return (
        <BubbleContainer animationDone={animationDone} device={device} size={size} delay={`${delay}s`} endOfX={endOfX} endOfY={endOfY}>
            <InnerBubbleContainer>
                <Bubble>
                    <Reflection />
                </Bubble>
            </InnerBubbleContainer>
        </BubbleContainer>
    )
}

export default BubbleComponent