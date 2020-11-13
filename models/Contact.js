const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nameFirst: {
    type: String,
  },
  nameLast: {
    type: String,
  },
  nameOther: {
    type: String,
  },
  type: {
    type: String,
    default: 'personal',
  },
  avatar: {
    type: String,
  },
  emailPrimary: {
    type: String,
  },
  emailOther: {
    type: String,
  },
  phoneCell: {
    type: String,
  },
  phoneOther: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
  },
  organization: {
    type: String,
  },
  website: {
    type: String,
  },
  githubAccount: {
    type: String,
  },
  githubUsername: {
    type: String,
  },
  youtubeAccount: {
    type: String,
  },
  youtubeUsername: {
    type: String,
  },
  linkedinAccount: {
    type: String,
  },
  linkedinUsername: {
    type: String,
  },
  twitterAccount: {
    type: String,
  },
  twitterUsername: {
    type: String,
  },
  facebookAccount: {
    type: String,
  },
  facebookUsername: {
    type: String,
  },
  instagramAccount: {
    type: String,
  },
  instagramUsername: {
    type: String,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', ContactSchema);
