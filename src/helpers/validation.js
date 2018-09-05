

const validation = {};

validation.verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token) {
        res.status(403).json({
            message: 'forbidden'
        })
    }
    req.token = token;
    next();
}


export default validation;