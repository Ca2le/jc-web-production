import React, { useContext } from 'react'
import { LangageContext } from '../../../components.libary'
import { Div } from './cards.styled'
import Card from './card/card.component'
import A from '../../../../assets/card3_1.png'
import B from '../../../../assets/card3_2.png'

function CardsComponent() {
    const { state_langange } = useContext(LangageContext)
    return <Div>
        {state_langange.showroom_projects.map( (element, index) => {
            switch(index){
                case 0 : {
                    return <Card key={(element.id+index)} element={element} card_img={A} card_height={158} card_width={170}/>
                }
                case 1 : {
                    return <Card key={(element.id+index)} element={element} card_img={B} card_height={160} card_width={160}/>
                }
                case 2 : {
                    return <Card key={(element.id+index)} element={element} />
                }
            }
        })}
    </Div>
}

export default CardsComponent