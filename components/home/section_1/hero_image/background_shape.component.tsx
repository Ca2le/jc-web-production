import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BubbleGuyIMG from '../../../../assets/bubbleguy.png'
import { BubbleGuyIMGContainer, InnerShapeContainer, ShapeContainer, SVG } from './background_shape.styled'
import BubbleList from './bubble/bubble_list.component'





function BackgroundShape() {
  const [bubbleToggle, setBubbleToggle] = useState(false)

  return (
    <ShapeContainer>
      <InnerShapeContainer>
        <BubbleGuyIMGContainer>
          <Image fill src={BubbleGuyIMG} alt={'error'} quality={100} />
        </BubbleGuyIMGContainer>
        <BubbleList />
        <SVG height={0} viewBox=' 0 0 367 269'>
          <path stroke="black" strokeWidth="1.5" d="M268.5,8.5h74.69c12.6,0,22.83,10.23,22.83,22.83v237.17H8.5C8.5,125,125,8.5,268.5,8.5Z" />
        </SVG>
      </InnerShapeContainer>
    </ShapeContainer>
  )
}

export default BackgroundShape
