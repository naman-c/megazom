import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404!</h2>
          <h3>Invalid request.</h3>
          <p>
            The page you want to access doesn't exist.Enter a valid url.
          </p>

          <NavLink to="/">
            <Button>Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
      font-size:4.2rem;
    }
  }
`;

export default Error;