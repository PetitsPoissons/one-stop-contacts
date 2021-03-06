import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, nameFirst, nameLast, emailPrimary, phoneCell, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {nameFirst.charAt(0).toUpperCase() + nameFirst.slice(1)}{' '}
        {nameLast.charAt(0).toUpperCase() + nameLast.slice(1)}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional'
              ? 'badge-success'
              : type === 'services'
              ? 'badge-light'
              : 'badge-primary')
          }
        >
          {type.toLowerCase()}
        </span>
      </h3>
      <ul className="list">
        {emailPrimary && (
          <li>
            <i className="fas fa-envelope-open"></i> {emailPrimary}
          </li>
        )}
        {phoneCell && (
          <li>
            <i className="fas fa-phone"></i> {phoneCell}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
