import styled from 'styled-components'

interface ItemWrapperProps {
  isActive: boolean
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
`

interface ItemProps {
  isActive: boolean
  backgroundImageUrl: string
}

export const Item = styled.div<ItemProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
  background-position: top;
  background-size: auto ${({ isActive }) => (isActive ? '120%' : '100%')};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;

  :after {
    content: '';
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`

interface CardInfoWrapperProps {
  isFirst: boolean
  isActive: boolean
}

export const CardInfoWrapper = styled.div<CardInfoWrapperProps>`
  box-sizing: border-box;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  padding-left: ${({ isFirst }) => (isFirst ? '100px' : '40px')};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
`

export const CourseFullname = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`

export const TopicListWrapper = styled.div`
  text-align: center;
  color: #fff;
`

export const TopicItems = styled.div`
  font-size: 52px;
  line-height: 1;
`

export const TopicText = styled.div`
  text-transform: uppercase;
`

interface CardInfoWrapperProps {
  isFirst: boolean
  isActive: boolean
}

export const ContentWrap2 = styled.div<CardInfoWrapperProps>`
  width: 120px;
  height: 120px;
  background-color: #1e1e2f;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 1;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? '0' : '1')};
  display: ${({ isFirst }) => (isFirst ? 'none' : 'block')};
`

export const ShortName = styled.div`
  font-size: 34px;
  transform: rotate(-90deg);
`
