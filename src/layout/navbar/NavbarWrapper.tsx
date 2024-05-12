import { Link } from 'react-router-dom'
import FlowableLogo from '../../assets/flowable-logo.png'

interface childrenProps {
  children?: React.ReactNode
}

const NavbarWrapper = ({ children }: childrenProps) => {
  return (
    <div className="bg-[#1F3245]   h-14 px-12 flex items-center">
      <Link to="/" className="h-full">
        <img
          src={FlowableLogo}
          alt="logo flowable"
          className="h-full object-contain "
        />
      </Link>
      {children}
    </div>
  )
}

export default NavbarWrapper
