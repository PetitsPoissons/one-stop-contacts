import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.username}</li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            {/* <h3>
              <i className={icon} /> {title}
            </h3> */}
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Z reseau',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
