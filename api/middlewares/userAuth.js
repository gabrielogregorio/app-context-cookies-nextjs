require('dotenv/config');
const jwt = require('jsonwebtoken');
const verifyNull = require('../functions/verifyNulls')

module.exports = ( req, res, next ) => {
  const authToken = req.headers.authorization;
  
  if( verifyNull(authToken)) {
    return res.sendStatus(403);
  }

  try {
    let data = jwt.verify(authToken, process.env.TOKEN_JWT);

    if(verifyNull(data.email)) {
      return res.sendStatus(403);
    }
    return next()

  } catch(error) {
    res.sendStatus(403)
    return res.json({msg: 'JWT expired!'})
  }
}
