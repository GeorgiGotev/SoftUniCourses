const { extractErrorMessages } = require('../util/errorHelpers');

module.exports = (err, req, res, next) => {
    const errorMessages = extractErrorMessages(err);
    res.render('404', { errorMessages });
};
