import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import ExpandableCard from '../components/ExpandableCard'
import DATA_CARDS from '../data/dataCards'

const Home = () => {
  const [activeItem, setActiveItem] = useState(1)

  const handleHover = (id: number) => {
    if (activeItem === id) return

    setActiveItem(id)
  }
  const handleLeaveHover = () => {
    if (activeItem === 1) return

    setActiveItem(1)
  }

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

      <PageContainer>
        <Wrapper>
          <ContentWrapper>
            <LeftSide>
              <TextWrapper>
                <BulletPoints>Watch. </BulletPoints>
                <BulletPoints>Learn. </BulletPoints>
                <BulletPoints>Grow. </BulletPoints>
              </TextWrapper>

              <SearchWrapper>
                <SearchInput placeholder='Find your passinon'></SearchInput>
                <SearchButton>Go</SearchButton>
              </SearchWrapper>
            </LeftSide>

            <RightSide>
              {DATA_CARDS.map((data) => (
                <ExpandableCard
                  key={data.id}
                  isActive={activeItem === data.id}
                  handleHover={() => handleHover(data.id)}
                  handleLeaveHover={handleLeaveHover}
                  {...data}
                />
              ))}
            </RightSide>
          </ContentWrapper>
        </Wrapper>
      </PageContainer>
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
  color: black;
`

const Wrapper = styled.div`
  width: 1300px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const LeftSide = styled.div`
  position: relative;
  font-size: 40px;
`

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
`

const BulletPoints = styled.div`
  font-weight: 600;
`

const SearchWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  height: 120px;
  width: 450px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 46px 50px;

  &:hover {
    transition: all 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.01) 0px 46px 50px;
  }
`

const SearchInput = styled.input`
  flex-grow: 1;
  height: inherit;
  outline: none;
  border: none;
  padding-left: 50px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
    color: #1e1e2f;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    transition: all 0.4s ease;
  }

  :active {
    color: red;
  }

  :focus {
    ::placeholder {
      transition: all 0.4s ease;
      opacity: 0.5;
    }
  }
`

const SearchButton = styled.button`
  height: 100%;
  aspect-ratio: 1;
  outline: none;
  border: none;
  font-size: 34px;
  font-weight: 600;
  font-family: 'Archia-Regular';
  background: linear-gradient(to top, #97c680 50%, #feba88 50%);
  background-size: 100% 200%;
  background-position-y: -100%;
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  :hover {
    background-position-y: 0%;
    transition: all 0.3s ease;
  }
`

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 960px;
  width: calc(100% - 100px);
  height: 600px;
`

export default Home
