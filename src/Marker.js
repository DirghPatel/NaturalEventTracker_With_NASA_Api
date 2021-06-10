import React from 'react'
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import styled from 'styled-components'


function Marker({ ltd , lng , onclick }) {


    return (
        <FireMark onclick = {onclick}>
          <Icon icon={locationIcon} style={{ color : 'red' , fontSize : '1rem'}}/>  
        </FireMark>
    )
}

export default Marker
const FireMark = styled.div`

`
