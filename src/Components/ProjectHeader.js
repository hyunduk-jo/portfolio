import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  height: 80px;
  position: sticky;
  top: 0px;
  box-shadow: 0 0 5px black;
  background-color: white;
  z-index: 10;
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
    width: 80%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    li{
      cursor: pointer;
      text-transform: capitalize;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 480px){
    &:first-child{
      width: 40%;
      a{
        font-size: 25px;
        margin-left: 10px;
      }
    }
    &:nth-child(2){
      display: none;
    }
    &:last-child{
      width: 60%;
      ul{
        width: 80%;
        font-size: 12px;
      }
    }
  }
`;

const ProjectHeader = ({link}) => {
  return <HeaderContainer>
  <ContainerColumn><Link to='/'>PORTFOLIO</Link></ContainerColumn>
  <ContainerColumn></ContainerColumn>
  <ContainerColumn>
    <ul>
      <li><Link to={link[0]}>{link[0].split('project/')[1]}</Link></li>
      <li><Link to={link[1]}>{link[1].split('project/')[1]}</Link></li>
      <li><Link to={link[2]}>{link[2].split('project/')[1]}</Link></li>
      <li><Link to={link[3]}>{link[3].split('project/')[1]}</Link></li>
    </ul>
  </ContainerColumn>
</HeaderContainer>
}

export default ProjectHeader;