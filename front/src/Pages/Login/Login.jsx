import { Box } from "@mui/material" 
import Header from "../../componets/Header/Header"

function Login() {
  return (
    <Box
    sx= {{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url(../.../public/background.jpeg)',
      opacity: 0.5,
    }}>
      <Header/>
    </Box>
    
  )
}

export default Login