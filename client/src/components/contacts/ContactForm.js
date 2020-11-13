import React, { Fragment, useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        nameFirst: '',
        nameLast: '',
        nameOther: '',
        type: 'personal',
        emailPrimary: '',
        emailOther: '',
        phoneCell: '',
        phoneOther: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        organization: '',
        website: '',
        githubAccount: '',
        githubUsername: '',
        youtubeAccount: '',
        youtubeUsername: '',
        linkedinAccount: '',
        linkedinUsername: '',
        twitterAccount: '',
        twitterUsername: '',
        facebookAccount: '',
        facebookUsername: '',
        instagramAccount: '',
        instagramUsername: '',
        note: '',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    nameFirst: '',
    nameLast: '',
    nameOther: '',
    type: 'personal',
    emailPrimary: '',
    emailOther: '',
    phoneCell: '',
    phoneOther: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    organization: '',
    website: '',
    githubAccount: '',
    githubUsername: '',
    youtubeAccount: '',
    youtubeUsername: '',
    linkedinAccount: '',
    linkedinUsername: '',
    twitterAccount: '',
    twitterUsername: '',
    facebookAccount: '',
    facebookUsername: '',
    instagramAccount: '',
    instagramUsername: '',
    note: '',
  });

  const {
    nameFirst,
    nameLast,
    nameOther,
    type,
    emailPrimary,
    emailOther,
    phoneCell,
    phoneOther,
    street,
    city,
    state,
    zip,
    country,
    organization,
    website,
    githubAccount,
    githubUsername,
    youtubeAccount,
    youtubeUsername,
    linkedinAccount,
    linkedinUsername,
    twitterAccount,
    twitterUsername,
    facebookAccount,
    facebookUsername,
    instagramAccount,
    instagramUsername,
    note,
  } = contact;

  const onChange = (e) =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? 'Edit Contact' : 'Add Contact'}
        </h2>
        <input
          type="text"
          placeholder="First Name"
          name="nameFirst"
          value={nameFirst}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="nameLast"
          value={nameLast}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Other Name"
          name="nameOther"
          value={nameOther}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Primary Email"
          name="emailPrimary"
          value={emailPrimary}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Other Email"
          name="emailOther"
          value={emailOther}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Cell Phone"
          name="phoneCell"
          value={phoneCell}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Other Phone"
          name="phoneOther"
          value={phoneOther}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Street Address"
          name="street"
          value={street}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={state}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Zip Code"
          name="zip"
          value={zip}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={country}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Organization / Company"
          name="organization"
          value={organization}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for website"
          name="website"
          value={website}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for GitHub"
          name="githubAccount"
          value={githubAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="GitHub username"
          name="githubUsername"
          value={githubUsername}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for YouTube"
          name="youtubeAccount"
          value={youtubeAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="You Tube username"
          name="youtubeUsername"
          value={youtubeUsername}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for linkedIn"
          name="linkedinAccount"
          value={linkedinAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="linkedIn username"
          name="linkedinUsername"
          value={linkedinUsername}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for Twitter"
          name="twitterAccount"
          value={twitterAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Twitter username"
          name="twitterUsername"
          value={twitterUsername}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for Facebook"
          name="facebookAccount"
          value={facebookAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Facebook username"
          name="facebookUsername"
          value={facebookUsername}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="URL for Instagram"
          name="instagramAccount"
          value={instagramAccount}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Instagram username"
          name="instagramUsername"
          value={instagramUsername}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === 'personal'}
          onChange={onChange}
        />{' '}
        Personal{' '}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        />{' '}
        Professional{' '}
        <input
          type="radio"
          name="type"
          value="services"
          checked={type === 'services'}
          onChange={onChange}
        />{' '}
        Services
        <textarea
          rows="4"
          placeholder="Add a note..."
          name="note"
          value={note}
          onChange={onChange}
        ></textarea>
        <div>
          <input
            type="submit"
            value={current ? 'Update Contact' : 'Add Contact'}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default ContactForm;
