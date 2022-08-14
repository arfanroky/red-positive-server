const USER = require('../models/userSchema');


const userControlPost = async(req, res, next) => {
    try {
        const email = req.params.email;
        const user = await USER.findOne({email:email});
        if(user){
          return res.status(409).send({
            error: 'Email is already exists'
          })
        }
        else{
           new USER(req.body).save(
            (err, result) => {
              if (err) {
                res.status(500).send(err);
              }
              if (result) {
                res.status(200).send({ message: 'User info added successfully!'});
              }
            }
          );
        }
  
      } catch (error) {
        res.send(error)
        res.status(500).send({
          error: 'internal server error!',
        });
      }
    
}

const userControlGet = async(req, res,next) =>{
    const email = req.params.email;
    const user = await USER.findOne({email:email});
    if(user){
      return res.status(409).send(user)
    }
    else{
        res.status(500).send({
            error: 'Do not have any information in this email!'
        })
    }
}

module.exports = {
    userControlPost,
    userControlGet
};