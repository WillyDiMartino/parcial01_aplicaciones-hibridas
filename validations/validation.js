import Joi from 'joi';

export const usersValidate = (data) => {
    const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid('admin', 'user', 'super-admin')
    });
    return schema.validate(data);
}
