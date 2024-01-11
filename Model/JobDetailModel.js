const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyURL: {
        type: String,
        required: true
    },
    experince: {
        type: Number,
        required: true
    },
    requiredSkills: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    isApplied: {
        type: Boolean
    },
    isReplied: {
        type: Boolean
    },
    remarks: {
        type: String
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'MyUser2'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('JobSearch-schema', jobSchema)



