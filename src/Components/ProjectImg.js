import styled from "styled-components";

const Container = styled.img`
  object-fit: contain;
  background-color: #DCDCDC;
  width: 50%;
  @media screen and (max-width: 480px){
    width: 90%;
  }
`;

const ImgTitle = styled.span`
  text-align: center;
  margin: 10px 0px;
  @media screen and (max-width: 480px){
    margin: 10px 0px 20px 0px;
  }
`;

const ProjectImg = ({src, text}) => {
  return <>
    <Container src={src} />
    <ImgTitle>{`<${text}>`}</ImgTitle>
  </>
}

export default ProjectImg;