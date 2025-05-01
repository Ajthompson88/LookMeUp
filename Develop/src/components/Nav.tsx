import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Search
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Saved Candidates
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
