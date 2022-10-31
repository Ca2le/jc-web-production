import Image from 'next/image';
import React from 'react'

import {InnerImageContainer, CardContainer, ImgContainer, HeaderContainer, Header, TextContainer, SubHeader, InfoContainer, StatusText, InfoText, StatusContainer } from './card.styled';

type CardProps = {
    key: string;
    element: {
        title: string;
        subcategory: string;
        description: string;
        status: string;
        img_cover_hex: string;
    };
    card_img?: any;
    card_width?: number;
    card_height?: number;
}
const img_style = {

}
function Card({ element, card_img, card_width, card_height }: CardProps) {
    const card_h = card_height
    return (
        <CardContainer>
            <ImgContainer color={element.img_cover_hex}>
                {/* @ts-ignore */}
                <InnerImageContainer iheight={card_height} iwidth={card_width}>
                    <Image src={card_img} alt={'img'} height={card_height} width={card_width} quality={100} />
                </InnerImageContainer>
            </ImgContainer>
            <TextContainer>
                <HeaderContainer>
                    <Header>{element.title}</Header>
                    <SubHeader>{element.subcategory}</SubHeader>
                </HeaderContainer>
                <InfoContainer>
                    <InfoText>{element.description}</InfoText>
                </InfoContainer>
            </TextContainer>
            <StatusContainer>
                <StatusText>{element.status}</StatusText>
            </StatusContainer>
        </CardContainer>
    )
}

export default Card