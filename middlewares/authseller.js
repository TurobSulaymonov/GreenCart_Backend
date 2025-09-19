import jwt from "jsonwebtoken";



const authSeller = async(req, res, next) => {
    const {sellerToken} = req.cookies;

    if(!sellerToken) {
        return res.json({success: false, message: 'Not Authorized'})
    }

    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokenDecode.id) {
            req.body.userId = tokenDecode.id
        } else{
            return res.json({success: false, message: 'Not Authorized'})
        }
        next()
    } catch(error) {
        res.json({success: false, message: error.message})

    }
}

export default authSeller;