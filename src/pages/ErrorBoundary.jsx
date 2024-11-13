import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
    let error = useRouteError();
    const navigate = useNavigate();
    console.error(error);
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }, [])
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
        }}>
            <Typography variant="h1" sx={{color: 'white'}}>Error</Typography>
            <Typography variant="h4" sx={{color: 'white'}}>Ada Kesalahan</Typography>
        </Box>
    )
}