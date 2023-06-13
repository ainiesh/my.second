import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
  return (
    <div className='header'>
      <h3 className='logo'>RedPeli</h3>
      <Link to ='/login' className='botton'>Sign In</Link>
    </div>
  )
}

export default Header