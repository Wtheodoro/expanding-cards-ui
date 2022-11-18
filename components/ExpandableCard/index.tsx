import React from 'react'
import {
  CardInfoWrapper,
  CardInfoVerticalWrapper,
  CourseFullname,
  Item,
  ItemWrapper,
  ShortName,
  TopicItems,
  TopicListWrapper,
  TopicText,
} from './styles'

interface IExpandableCard {
  id: number
  imageUrl: string
  name: string
  topicList: number
  shortName: string
  handleHover: (id: number) => void
  handleLeaveHover: () => void
  isActive: boolean
}

const ExpandableCard: React.FC<IExpandableCard> = ({
  id,
  imageUrl,
  name,
  topicList,
  shortName,
  handleHover,
  handleLeaveHover,
  isActive,
}) => {
  return (
    <ItemWrapper
      key={id}
      onMouseOver={() => handleHover(id)}
      onMouseLeave={handleLeaveHover}
      isActive={isActive}
    >
      <Item backgroundImageUrl={imageUrl} isActive={isActive}>
        <CardInfoWrapper isActive={isActive} isFirst={id === 1}>
          <CourseFullname>{name}</CourseFullname>
          <TopicListWrapper>
            <TopicItems>{topicList}</TopicItems>
            <TopicText>Topics</TopicText>
          </TopicListWrapper>
        </CardInfoWrapper>

        <CardInfoVerticalWrapper isActive={isActive} isFirst={id === 1}>
          <ShortName>{shortName}</ShortName>
        </CardInfoVerticalWrapper>
      </Item>
    </ItemWrapper>
  )
}

export default ExpandableCard
