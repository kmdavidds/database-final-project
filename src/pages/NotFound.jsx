import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Typography variant="h1" sx={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ color: "white" }}>
        Page Not Found
      </Typography>
    </Box>
  );
}
