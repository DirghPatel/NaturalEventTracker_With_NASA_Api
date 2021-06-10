import React from 'react'
import GoogleMap from './GoogleMap'
import { useState , useEffect } from 'react'
import styled from 'styled-components'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])


  return (
    <div>
      {!loading ?
        <GoogleMap data ={ data } /> 
        :
        <LoadingPage>
        <LoadingImage src="https://i2.wp.com/boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif?w=970" />
        </LoadingPage>
        }
    </div>
  )
}

export default App

const LoadingPage = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 0px;
`
const LoadingImage = styled.img`
  height: 100%;
  width: 100%;
`
