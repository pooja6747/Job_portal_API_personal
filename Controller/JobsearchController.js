const JobSearch = require('../Model/JobDetailModel')

exports.getJob = async (req, res) => {
    try {
        const data = await JobSearch.find().populate('user');
        res.json(data)
    } catch (error) {
        res.status(400).send('error', error.message)
    }
}

exports.postJob = async (req, res) => {
    try {
        const data = await JobSearch.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}