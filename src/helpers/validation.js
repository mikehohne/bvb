

const validation = {};

validation.verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token) {
        res.status(403).json({
            message: 'forbidden'
        })
    }
}


export default validation;