import React from 'react'
import BackgroundShape from './background_shape.component'
import { HeroImageContainer } from './hero_image.styled'
import MoroccanSquare from './moroccan_square.component'

function HeroImageComponent() {
    return (
        <HeroImageContainer>
            <BackgroundShape />
            <MoroccanSquare />
        </HeroImageContainer>
    )
}

export default HeroImageComponent