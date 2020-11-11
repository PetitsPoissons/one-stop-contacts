const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      lastname: 1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', auth, async (req, res) => {
  // check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // save new contact
  try {
    // get user's gravatar if any
    let avatar;
    if (req.body.email) {
      avatar = gravatar.url(req.body.email, {
        s: '200', // size of the avatar
        r: 'pg', // rating
        d: 'mm', // default icon
      });
    }
    const contactObj = req.body;
    const newContact = new Contact({
      ...contactObj,
      avatar,
      user: req.user.id,
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const {
    firstname,
    lastname,
    surrogateName,
    type,
    email,
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
  } = req.body;

  // get user's gravatar if any
  let newAvatar;
  if (email) {
    newAvatar = gravatar.url(email, {
      s: '200', // size of the avatar
      r: 'pg', // rating
      d: 'mm', // default icon
    });
  }

  // build contact object
  const contactFields = {};
  if (firstname) contactFields.firstname = firstname;
  if (lastname) contactFields.lastname = lastname;
  if (surrogateName) contactFields.surrogateName = surrogateName;
  if (type) contactFields.type = type;
  if (email) contactFields.email = email;
  if (emailOther) contactFields.emailOther = emailOther;
  if (phoneCell) contactFields.phoneCell = phoneCell;
  if (phoneOther) contactFields.phoneOther = phoneOther;
  if (street) contactFields.street = street;
  if (city) contactFields.city = city;
  if (state) contactFields.state = state;
  if (zip) contactFields.zip = zip;
  if (country) contactFields.country = country;
  if (organization) contactFields.organization = organization;
  if (website) contactFields.website = website;
  if (githubAccount) contactFields.githubAccount = githubAccount;
  if (githubUsername) contactFields.githubUsername = githubUsername;
  if (youtubeAccount) contactFields.youtubeAccount = youtubeAccount;
  if (youtubeUsername) contactFields.youtubeUsername = youtubeUsername;
  if (linkedinAccount) contactFields.linkedinAccount = linkedinAccount;
  if (linkedinUsername) contactFields.linkedinUsername = linkedinUsername;
  if (twitterAccount) contactFields.twitterAccount = twitterAccount;
  if (twitterUsername) contactFields.twitterUsername = twitterUsername;
  if (facebookAccount) contactFields.facebookAccount = facebookAccount;
  if (facebookUsername) contactFields.facebookUsername = facebookUsername;
  if (instagramAccount) contactFields.instagramAccount = instagramAccount;
  if (instagramUsername) contactFields.instagramUsername = instagramUsername;
  if (note) contactFields.note = note;

  // update contact
  try {
    let contact = await Contact.findById(req.params.id);
    // check if contact exists
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });
    // check that the user 'owns' the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    // update contact
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    // check if contact exists
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });
    // check that the user 'owns' the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    // delete contact
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
