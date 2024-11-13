import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        m: 4,
        position: "absolute",
        display: { xs: "none", md: "inline" },
        top: 2,
      }}
    >
      <Button variant="contained" size="medium" onClick={() => navigate(-1)}>
        Kembali
      </Button>
    </Box>
  );
}
