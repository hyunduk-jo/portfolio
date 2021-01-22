import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: white;
  z-index: 10;
  box-shadow: 0 0 5px black;
`;

const ContainerColumn = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  &:first-child{
    a{
      margin-left: 100px;
      font-size: 30px;
      font-weight: 600;
    }
  }
  &:not(:first-child){
    justify-content: center;
  }
  ul{
    width: 50%;
    display: flex;
    list-style: none;
    justify-content: space-around;
    li{
      cursor: pointer;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1200px){
    &:first-child{
      width: 60%;
    }
    &:nth-child(2){
      display: none;
    }
    &:last-child{
      width: 40%;
      ul{
        width: 50%;
        li{
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 480px){
    &:first-child{
      width: 45%;
      a{
        font-size: 25px;
        margin-left: 20px;
      }
    }
    &:nth-child(2){
      display: none;
    }
    &:last-child{
      width: 55%;
      ul{
        width: 80%;
        li{
          font-size: 12px;
        }
      }
    }
  }
`;

const Header = ({aboutRef, projectsRef, contactRef}) => {
  return <HeaderContainer>
  <ContainerColumn><Link to='/'>PORTFOLIO</Link></ContainerColumn>
  <ContainerColumn></ContainerColumn>
  <ContainerColumn>
    <ul>
      <li onClick={() => window.scrollTo({top: aboutRef.current.offsetTop - 80, left: 0, behavior: 'smooth'})}>Home</li>
      <li onClick={() => window.scrollTo({top: projectsRef.current.offsetTop - 80, left: 0, behavior: 'smooth'})}>Projects</li>
      <li onClick={() => window.scrollTo({top: contactRef.current.offsetTop - 80, left: 0, behavior: 'smooth'})}>Contact</li>
    </ul>
  </ContainerColumn>
</HeaderContainer>
}

export default Header;