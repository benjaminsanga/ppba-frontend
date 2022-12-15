const Joi = require('joi')

const Schema = Joi.object({
  nameOfOrganization: Joi.string().required(),
  yearOfEstablishment: Joi.string().required(),
  thematicAreas: Joi.string().required(),
  address: Joi.string().required(),
  contact: Joi.string().required(),
  email: Joi.string().required(),
  registrationStatus: Joi.string().required(),
})

module.exports = Schema