import { Box } from "@mui/material"
import Login from "core/app/components/Auth/Login"

export const LoginPage = () => {
    return (
    <Box 
      sx={{
        marginTop: {lg: "100px", sm: "110px", xs: "67px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Login />
        </Box>
    )
}