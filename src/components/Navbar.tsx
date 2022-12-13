import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

export function Navbar() {
  return (
    <>
    <div className="flex justify-between">
        <Button href="/">Home</Button>
      <Button href="/login" variant="contained">Login</Button>
      <Button href="/signup" variant="contained">Signup</Button>

    </div>
      
        
    </>
  )
}