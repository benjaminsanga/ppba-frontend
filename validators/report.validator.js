const Joi = require('joi')
					
const Schema = Joi.object({
  reportType: Joi.string().required(),
  reportedBy: Joi.string().required(),
  title: Joi.string().required(),
  summary: Joi.string().required(),
  image: Joi.string(),
  video: Joi.string(),
})

module.exports = Schema