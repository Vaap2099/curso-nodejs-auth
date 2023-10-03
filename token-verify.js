const jwt =require('jsonwebtoken');

const secret = 'myCat';
3const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NjM2NDMwNn0.dlChDYxp7yJC1oOckm30f_GTxBzDCeljPP_gf4peBN0';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
