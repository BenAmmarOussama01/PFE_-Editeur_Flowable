import { Link } from 'react-router-dom'
import NavbarWrapper from './NavbarWrapper'

const navItems = [
  { id: 1, text: 'Processes', link: '/blocks/modeler/processes' },
  { id: 2, text: 'Case models', link: 'caseModels' },
  { id: 3, text: 'Forms', link: '/blocks/modeler/form' },
  { id: 4, text: 'Decisions', link: '/blocks/modeler/decisions' },
  { id: 5, text: 'Apps', link: '/modeler' },
]

const ProcessesNavbar = () => {
  return (
    <NavbarWrapper>
      <ul className=" ml-20 flex items-stretch h-full list-none ">
        {navItems.map((item) => (
          <Link
            to={item.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={item.id}
          >
            <li
              key={item.id}
              className="text-xl h-full  text-slate-300 px-6 hover:bg-black "
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
