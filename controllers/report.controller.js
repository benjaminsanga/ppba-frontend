const jwt = require('jsonwebtoken')
const db = require('../models')

const Report = db.report
const Activity = db.activity
const Op = db.Sequelize.Op

const ReportValidator = require('../validators/report.validator.js')
const ActivityValidator = require('../validators/activity.validator.js')

// Report Security Alert Incident
exports.securityAlert = async (req, res) => {
    const reportData = req.body;
    
    const {value, error} = ReportValidator.validate(reportData);
    if (error)
    return res
      .status(400)
      .json({
        message: "Please fill all required fields",
        data: error.details,
      });
    
    // save user to db
    try {
        let newReport = await Report.create(reportData);
        return res.status(200).json({ message: "Report Created", data: {} });
    } catch (err) {
        if (err.errors)
            return res
            .status(400)
            .json({ message: err.errors[0].message, data: err.errors });
        return res.status(500).json({ message: err.message, data: {} });
    }

}

// Report Inter Faith Incident
exports.interFaith = async (req, res) => {
    return res.status(200).json({message: 'Reported Successfully', data: {}})

}

// Report Gender Based Incident
exports.genderBased = async (req, res) => {
    return res.status(200).json({message: 'Reported Successfully', data: {}})


}

// Report Legal Incident
exports.legal = async (req, res) => {
    return res.status(200).json({message: 'Reported Successfully', data: {}})


}

// Report Empowerment
exports.empowerment = async (req, res) => {
    return res.status(200).json({message: 'Reported Successfully', data: {}})


}

// Report Health
exports.health = async (req, res) => {
    return res.status(200).json({message: 'Reported Successfully', data: {}})
}

// Activity report
exports.activity = async (req, res) => {
    const reportData = req.body;
    
    const {value, error} = ActivityValidator.validate(reportData);
    if (error)
    return res
      .status(400)
      .json({
        message: "Please fill all required fields",
        data: error.details,
      });
    
    // save user to db
    try {
        let newReport = await Activity.create(reportData);
        return res.status(200).json({ message: "Activity Created", data: {} });
    } catch (err) {
        if (err.errors)
            return res
            .status(400)
            .json({ message: err.errors[0].message, data: err.errors });
        return res.status(500).json({ message: err.message, data: {} });
    }
}

exports.getActivities = (req, res) => {
    const activities = Activity.findAll({
        attributes: ['donorAgency', 'projectTitle', 'projectDuration', 'projectLGAs', 'areaOfIntervention']
    }).then(function(all_activities){
        console.log(all_activities);
        res.send({error:false,message:'users list',data:all_activities});
    }).catch(function(err){
        console.log('Oops! something went wrong, : ', err);
    });;

    // return res.status(200).json({message: 'Data fetched', data: {"activities": activities}})
}
