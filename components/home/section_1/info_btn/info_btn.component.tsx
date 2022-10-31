import React from 'react'
import { MoreInfoBtn } from './info_btn.styled'
import { ScrollTo } from '../../../../scripts/scroll_features'

interface IIBC{
    reference: any;
    text: string;
}

function InfoBtnComponent(props: IIBC) {
   
        return(
            <MoreInfoBtn onClick={ () => { ScrollTo(props.reference) }}>{props.text}</MoreInfoBtn>
        )
}

export default InfoBtnComponent