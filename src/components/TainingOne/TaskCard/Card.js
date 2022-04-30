import { Wrapper, Circle, FlexBox, Box, Container } from "./Card.styles";

export const Card = ({ data }) => {
  return (
    <>
      <Wrapper>
        <Box style={{ backgroundImage: `url("${data.background}")` }}>
          <p>
            {data.name} {data.surname}
          </p>
          <Circle>
            <img src={data.avatar} alt={data.name} />
          </Circle>
        </Box>

        <FlexBox>
          <p>Rewards</p>
          <div>
            {data.bronze > 0 ? (
              <Container>
                <p>{data.bronze}</p>
                <p>Bronze</p>
              </Container>
            ) : null}
            {data.silver > 0 ? (
              <Container>
                <p>{data.silver}</p>
                <p>Silver</p>
              </Container>
            ) : null}
            {data.gold > 0 ? (
              <Container>
                <p>{data.gold}</p>
                <p>Gold</p>
              </Container>
            ) : null}
          </div>
        </FlexBox>
      </Wrapper>
    </>
  );
};
