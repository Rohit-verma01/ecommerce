import { Container, PrimaryContent, SecondaryContent } from "./style";

const OfflinePage = () => {
  return (
    <Container>
      <PrimaryContent>you are offline!</PrimaryContent>
      <SecondaryContent>
        Seems like you've gone offline,you might want to wait until your network
        comes back before continuing
      </SecondaryContent>
    </Container>
  );
};

export default OfflinePage;
