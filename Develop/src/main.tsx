// src/components/Nav.tsx
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : ''
            }
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SavedCandidates"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : ''
            }
          >
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
