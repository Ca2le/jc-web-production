import React, { useContext, useEffect, useRef, useState } from 'react'
import * as CL from '../../../components.libary'
import { OuterTextContainer, CardContainer, Header, ImageContainer, TextContainer, TextLink, Text, Rectangle } from './wide_card.styled'

type WideCardProps = {
    direction: string;
    imgBGColor: string;
    header: string;
    text: string;
    link: string;
    id: string;
    index: number;
}
type InitialStateType = boolean[]

function WideCardComponent({ id, direction, imgBGColor, header, text, link, index }: WideCardProps) {

    const ref = useRef(null);
    const { refArr, setRefArr } = useContext(CL.IntersectionContext)
    const initialState: InitialStateType = [false, false, false]
    const [cardVisabillty, setCardVisabillty] = useState(initialState)
    const options = {
        rootMargin: '0%',
        threshold: 0
    }
    useEffect(() => {
        const refObj = refArr
        refObj[index].reference = ref
        setRefArr(refObj)

    }, [])
    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            //@ts-ignore
            setCardVisabillty(entry.isIntersecting)
            
        }, options);
        observer.observe(refArr[index].reference.current)


    }, [])

    return (
        <CardContainer cardVisabillty={cardVisabillty} id={id} ref={ref} direction={direction}>
            <ImageContainer cardVisabillty={cardVisabillty} direction={direction}>
                <Rectangle cardVisabillty={cardVisabillty} direction={direction} imgBGColor={imgBGColor} />
            </ImageContainer>
            <OuterTextContainer cardVisabillty={cardVisabillty} direction={direction}>
                <TextContainer cardVisabillty={cardVisabillty} direction={direction}>
                    <Header >{header}</Header>
                    <Text>{text}</Text>
                    <TextLink>{link}</TextLink>
                </TextContainer>
            </OuterTextContainer>
        </CardContainer>
    )
}


export default WideCardComponent
