/** Shared config for application; can be req'd many places. */
require("dotenv").config();

const PORT = +process.env.PORT || 3000;

// database is:
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'survey-test'
// - else: 'survey'

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "survey-test";
} else {
  DB_URI  = process.env.DATABASE_URL || 'survey';
}

module.exports = {
  PORT,
  DB_URI,
};
