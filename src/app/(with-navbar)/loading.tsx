import { CircularProgress, Container, LinearProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
    </Container>
  );
};

export default LoadingPage;
