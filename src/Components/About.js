import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 35% 65%;
  font-size: 1vw;
`;

const Greet = styled.div`
  font-weight: 600;
  font-size: calc(4vw + 1vh);
  @media screen and (max-width: 480px){
    font-size: calc(1vw + 4vh);
  }
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(3vw + 1vh);
  @media screen and (max-width: 480px){
    font-size: calc(1vw + 3vh);
  }
  font-weight: 600;
`;

const AboutCard = () => {
  return <>
    <Container>
      <Greet>Hello,<br />I'm Hyunduk.</Greet>
      <Message>I'm a frontend developer and wants to be a full-stack developer.<br /> React is what I use for the frontend and use Express for the backend.</Message>
    </Container>
  </>
}

export default AboutCard;