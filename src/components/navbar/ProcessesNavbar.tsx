import { Link } from 'react-router-dom'
import NavbarWrapper from './NavbarWrapper'

const navItems = [
  { id: 1, text: 'Processes', link: '/blocks/modeler/processes' },
  { id: 2, text: 'Case models', link: '/modeler' },
  { id: 3, text: 'Forms', link: '/modeler' },
  { id: 4, text: 'Decisions', link: '/modeler' },
  { id: 5, text: 'Apps', link: '/modeler' },
]

const ProcessesNavbar = () => {
  return (
    <NavbarWrapper>
      <ul className="flex ml-20 h-full">
        {navItems.map((item) => (
          <Link
            to={item.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={item.id}
          >
            <li
              key={item.id}
              className="text-xl h-full flex items-center text-slate-300 px-6 hover:bg-black "
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </NavbarWrapper>
  )
}

export default ProcessesNavbar
