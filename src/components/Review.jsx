import React from 'react'
import styled from "styled-components"

const Review = ({review}) => {
  return (
    <Container>
        <Header>
            <UserImageWrapper>
                <UserImage src={review.user.images.jpg.image_url}/>
            </UserImageWrapper>
            <UserInfo></UserInfo>
            <ReviewInfo>

            </ReviewInfo>
        </Header>
        <Body> 
            <ReviewContent>
                {review.review}
            </ReviewContent>
        </Body>
    </Container>
  )
}

export default Review

const Container = styled.section`
    display: flex;
    flex-direction: column;
`
// Top
const Header = styled.div`
    display: flex;
`
const UserImageWrapper = styled.div`
    height: 80px;
    width: 80px;
`

const UserImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const UserInfo = styled.div`
`
const ReviewInfo = styled.div``


// Bottom
const Body = styled.div`
    border-top: 
`

const ReviewContent = styled.p``