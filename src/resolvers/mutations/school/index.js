const { v4: uuidv4 } = require('uuid')
const { schoolModel } = require('../../../models')

const schoolMutations = {
  createSchool: async (data) => {
    const school = await schoolModel.create({
      ...data,
      schoolID: uuidv4(),
    })

    console.log({ data, school })
    if (!school) throw new Error('opps!')

    return {
      school,
      code: 200,
      success: true,
      message: 'school created',
    }
  },
}

module.exports = schoolMutations
