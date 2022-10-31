import React from 'react'
import {Box} from './magic_box.styled'
import * as CL from '../../../../components.libary'

interface IMagicBoxComponent {
    children: React.ReactNode;
}
function MagicBoxComponent({children}: IMagicBoxComponent) {
    return <Box>
          {children}
        </Box>
    
}

export default MagicBoxComponent