import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const [activeItem, setActiveItem] = useState(1)

  const handleHover = (id: number) => {}
  const handleLeaveHover = () => {}

  return (
    <div>
      <Head>
        <title>Skillex clone</title>
        <meta
          name='Skillex'
          content='Just a webpage with expandable flex cards'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageContainer>Hello world!</PageContainer>
    </div>
  )
}

const PageContainer = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfbfb;
`

export default Home
