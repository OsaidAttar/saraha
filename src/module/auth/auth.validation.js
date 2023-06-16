import joi from 'joi'

export const signUpSchema=
{body:joi.object({
    userName:joi.string().alphanum().min(2).max(20).required().messages({
        'any.required':"userName is required",
        "string.empty":"userName is not allowed to be empty"
    }),
    email:joi.string().email({maxDomainSegments:3 ,tlds:{allow:['com','net','edu']}}).required(),
    password:joi.string().required(),
    cPassword:joi.string().valid(joi.ref('password')).required(),
    // age:joi.number().integer().min(20).max(80).required(),
    // gender:joi.string().alphanum().valid('male','female').required()
}).required(),

// query:joi.object({
// test:joi.boolean().required()
// }).required()
}



export const signInSchema=
{
body:joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
}).required()
}