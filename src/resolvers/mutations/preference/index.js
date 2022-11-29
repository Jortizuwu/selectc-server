const { v4: uuidv4 } = require('uuid')
const { preferenceModel } = require('../../../models')

const preferenceMutations = {
  createPreference: async (data) => {
    const preference = await preferenceModel.create({
      ...data,
      preferenceID: uuidv4()
    })

    if (!preference) throw new Error('opps!')

    return {
      preference,
      code: 200,
      success: true,
      message: 'preference created'
    }
  }
}

module.exports = preferenceMutations
