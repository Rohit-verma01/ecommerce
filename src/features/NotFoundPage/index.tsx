import { useNavigate } from "react-router-dom";
import { MessageContainer, SimpleText, HomescreenButton } from "./style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MessageContainer>
      <SimpleText>Oops!</SimpleText>
      <h1>404 - PAGE NOT FOUND</h1>
      <p>
        The Page you are looking for might have been removed had its name
        changed or is temporarily unavialable
      </p>
      <HomescreenButton data-testid="home-btn" onClick={() => navigate("./")}>
        Go to HomePage
      </HomescreenButton>
    </MessageContainer>
  );
};

export default NotFound;
