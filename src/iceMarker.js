import React from 'react'
import {Icon} from '@iconify/react'
import iceIcon from '@iconify-icons/noto/ice';

import styled from 'styled-components'


function IceMarker({ ltd , lng , onclick }) {


    return (
        <IceMark onclick = {onclick}>
          <Icon icon={iceIcon} style={{ color : 'red' , fontSize : '1rem'}}/>  
        </IceMark>
    )
}

export default IceMarker
const IceMark = styled.div`

`
