import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            mb: 8,
          }}
        >
          <img src="/logo5.png" alt="logo" height={200} />
          <Typography variant="h2" sx={{ ml: 4, color: "primary.main" }}>
            Sistem Informasi <br /> Warung Internet
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="large"
          sx={{ mb: 4 }}
          onClick={() => navigate("/customer/login")}
        >
          Customer Login
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ mb: 4 }}
          onClick={() => navigate("/customer/register")}
        >
          Customer Register
        </Button>
      </Box>
    </>
  );
}
