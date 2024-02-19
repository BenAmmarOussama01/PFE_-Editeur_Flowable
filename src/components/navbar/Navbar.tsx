import FlowableLogo from "../../assets/flowable-logo.png";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, text: "Processes", link: "/modeler/processes" },
  { id: 2, text: "Case models", link: "/modeler" },
  { id: 3, text: "Forms", link: "/modeler" },
  { id: 4, text: "Decisions", link: "/modeler" },
  { id: 5, text: "Apps", link: "/modeler" },
];

const Navbar = () => {
  return (
    <div className="bg-[#1F3245]   h-14 px-12 flex items-center">
      <Link to="/" className="h-full">
        <img
          src={FlowableLogo}
          alt="logo flowable"
          className="h-full object-contain "
        />
      </Link>

      <ul className="flex ml-20 h-full">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-xl h-full flex items-center text-slate-300 px-6 hover:bg-black "
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
