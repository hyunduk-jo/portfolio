import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 480px){
    height: 80%;
  }
`;

const FrontendContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BackendContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SkillContainer = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  place-items: center;
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #F6EDDC;
`;

const Skill = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1000px){
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 800px){
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 600px){
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 480px){
    width: 40px;
    height: 40px;
  }
`;


const SkillsCard = () => {
  return <>
    <Container>
      <FrontendContainer>
        <Text>Front-end</Text>
        <SkillContainer>
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/html.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/css.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/javascript.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/react.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/styledComponent.png?raw=true" />
        </SkillContainer>
      </FrontendContainer>
      <BackendContainer>
        <Text>Back-end</Text>
        <SkillContainer>
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/express.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/mongodb.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/graphql.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/apollo.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/prisma.png?raw=true" />
          <Skill src="https://github.com/hyunduk-jo/portfolio/blob/master/public/skillsImg/passport.png?raw=true" />
        </SkillContainer>
      </BackendContainer>
    </Container>
  </>
}

export default SkillsCard;