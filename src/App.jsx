
import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(83, 71, 3, 0.1);
  margin: 20px;
  background-color: rgba(240, 240, 240, 0.7);
`;

const ImageAndTitle = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 10px;
    border: 5px solid black;
    height: 200px;
    object-fit: cover;
  }
`;

const TitleAndParagraph = styled.div`
  text-align: center;
  margin: auto;
`;

const DescriptionAndRating = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: black;

  p {
    margin-bottom: 10px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Star = styled.span`
  display: inline-block;
  margin: 0 2px;
  width: 50px;
  height: 50px;
  /*background: url('src/assets/star.png');*/
  background: url(${(props) => (props.active ? 'src/assets/stargold.png' : 'src/assets/star.png')});
  background-size: cover;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
  }

  ${({ active }) => (active ? 'filter: brightness(1.5);' : '')}
`;

const App = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  };

  return (
    <CardContainer>
      <ImageAndTitle>
        <img src="src/assets/acdc.png" alt="Card" />
        <TitleAndParagraph>
          <h2>Ac/Dc</h2>
          <p>The best Album</p>
        </TitleAndParagraph>
      </ImageAndTitle>
      <DescriptionAndRating>
        <RatingContainer>
          {stars.map((active, index) => (
            <Star key={index} active={active} onClick={() => handleStarClick(index)} />
          ))}
        </RatingContainer>
        <p>This is a creative card description.</p>
      </DescriptionAndRating>
    </CardContainer>
  );
};

export default App;
