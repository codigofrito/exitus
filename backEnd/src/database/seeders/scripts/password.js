const bcrypt = require('bcryptjs');
module.exports = (
	bcrypt.hashSync('123456789', 10).toString()
);
