const { SECRET } = require('../config/config');
const jwt = require('../lib/jwt');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.isAuthenticated=true;
            res.locals.user=decodedToken;
        } catch (err) {
            res.clearCookie('auth');
            return res.status(401).render('home/404');
        }
    }
    next();
};

exports.isAuth=(req,res,next)=>{
    if(!req.user){
        return res.redirect('/login');
    }
    next();
};