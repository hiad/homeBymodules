import React from 'react'
import styled from 'styled-components';



const Image = styled.div`
      background-image: url(./Header.png);
      background-size: cover;
      height: 200px;
      width: 100%;
      margin: 0 auto;
      display:flex;
      align-items: center;
      justify-content: center;
      opacity: 1.36;
      background-color: #000;
`;

const Title = styled.h1`
      color: #ffffff;
      font-size: 43px;
      font-weight: 700;
`;

const TopImage = ({ className }) => {
      return (
            <Image className={className}>
                  <Title>Help Desk</Title>
            </Image>
      )
};

export default TopImage;