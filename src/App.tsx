import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <InnerContainer>
        <h1>GITHUB ACTIONS PRACTICE</h1>
        <a href="https://github.com/sangminlee98/github-actions_S3_build">
          깃허브 이동
        </a>
      </InnerContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > a {
    color: #9bb6fb;
    margin-top: 30px;
  }
`;
