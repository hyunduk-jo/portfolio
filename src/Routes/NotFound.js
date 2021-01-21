import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const NotFound = () => {
  return <Container>404 Page Not Found</Container>
}

export default NotFound;