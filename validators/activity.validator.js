const Joi = require('joi')

const Schema = Joi.object({
  donorAgency: Joi.string().required(),
  projectTitle: Joi.string().required(),
  projectDuration: Joi.string().required(),
  projectLGAs: Joi.string().required(),
  areaOfIntervention: Joi.string(),
})

module.exports = Schema