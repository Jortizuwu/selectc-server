const { v4: uuidv4 } = require('uuid')
const { careerModel } = require('../../../models')

const careerMutations = {
  createCareer: async (data) => {
    const career = await careerModel.create({
      ...data,
      careerID: uuidv4()
    })

    if (!career) throw new Error('opps!')

    return {
      career,
      code: 200,
      success: true,
      message: 'career created'
    }
  }
}

module.exports = careerMutations
