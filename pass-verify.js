const bcrypt=require('bcrypt');


async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = "$2b$10$OMleuIXpzd8RJNuVRNLcW.nC0QGdpdO/ingBrOvTpmKsLm9ylFA0C";
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();

