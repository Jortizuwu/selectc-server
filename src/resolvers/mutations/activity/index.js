const { v4: uuidv4 } = require('uuid')
const { activityModel } = require('../../../models')

const activityMutations = {
  createActivity: async (data) => {
    const activity = await activityModel.create({
      ...data,
      activityID: uuidv4(),
    })

    if (!activity) throw new Error('opps!')

    return {
      activity,
      code: 200,
      success: true,
      message: 'activity created',
    }
  },
}

module.exports = activityMutations
