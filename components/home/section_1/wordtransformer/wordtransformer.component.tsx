import React, { useContext, useEffect, useState } from 'react'
import * as CL from '../../../components.libary'
import {Word, WordContainer} from './wordtransformer.styled'

import { keyFrames } from './keyframes'

function WordTransformerComponent() {
    const [currentKeyframe, setCurrentKeyframe] = useState(keyFrames[0])
    let wordRotationTimer: any
    const [wordIndex, setWordIndex] = useState(0)
    const langageContext = useContext(CL.LangageContext)
    const wordArray = langageContext.state_langange.home_h_2
    const wordRotation = () => { 

      // Use Array.reducer insted of this madness 💢🐌🦥 when time is ⤵
      const intrestingTest = keyFrames.map( ( current, index ) => {
        let frame
        if(current === currentKeyframe && index < keyFrames.length) {
          frame = index + 1
        }
        if(index === keyFrames.length - 1){
          frame = 0
        }
        return frame
      } )
      
      const [ intrestingTest2 ] = intrestingTest.filter( (current, index) => (typeof(current) === 'number') )

      // ----------------------------------------------------
      
      wordRotationTimer = setTimeout( () => {

        if (wordIndex > wordArray.length - 2) {
          setWordIndex( prevState => prevState = 0 )
          setCurrentKeyframe(keyFrames[intrestingTest2!])
        } else {
          setWordIndex( prevState => prevState + 1 )
          setCurrentKeyframe(keyFrames[intrestingTest2!])
          wordRotation()
        }
      }, 4000)
    }

    useEffect( () => {
      wordRotation()
      return () => clearTimeout(wordRotationTimer)
    }, [wordIndex])

  return (
    <WordContainer>
        <Word keyFrame={currentKeyframe}>{wordArray[wordIndex]}</Word>
    </WordContainer>
  )
}


export default WordTransformerComponent

