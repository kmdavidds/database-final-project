import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Fab,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";

import { useMutation } from "react-query";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import apiURL from "../js/APIURL";
import axios from "axios";
import BackButton from "../components/BackButton";

export default function CustomerRegister() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const postRegister = async (registerDetails) => {
    const response = await axios({
      method: "POST",
      baseURL: apiURL,
      url: "/api/v1/customer/register",
      data: registerDetails,
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: postRegister,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleRegister = (e) => {
    e.preventDefault();
    mutation.mutate({ name, phone, email, password });
  };

  return (
    <>
      <BackButton />
      <Container sx={{ height: "100vh" }}>
        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box sx={{ pb: 2 }}>
            <Typography variant="h3">Customer Register</Typography>
          </Box>
          <TextField
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ my: 3, width: "25ch" }}
          />
          <TextField
            required
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ mb: 3, width: "25ch" }}
          />
          <TextField
            required
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3, width: "25ch" }}
          />
          <FormControl required sx={{ mb: 3, width: "25ch" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Typography variant="overline" sx={{ mb: 3 }}>
            Secure <LockIcon fontSize="inherit" />
          </Typography>
          {mutation.isPending ? (
            <CircularProgress size={48} />
          ) : (
            <Fab variant="extended" color="primary" type="submit">
              Register
              <LoginIcon sx={{ ml: 1 }} />
            </Fab>
          )}
          {mutation.isError ? (
            <Snackbar
              open={true}
              autoHideDuration={6000}
              onClose={() => mutation.reset()}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                Invalid input.
              </Alert>
            </Snackbar>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </>
  );
}
