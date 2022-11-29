const { findActivityByName } = require('../../../helpers/activity')
const { userHasActivityModel } = require('../../../models')

const userHasActivityMutations = {
  addActivityToUser: async (data, context) => {
    await Promise.all(
      data.arrActivities.map(async (val) => {
        const { activityID } = await findActivityByName(val.name)
        await userHasActivityModel.create({
          uid: context.currentUser.uid,
          activityID,
          userValue: val.userValue
        })
      })
    )
    return {
      code: 200,
      success: true,
      message: 'activities add to user'
    }
  },
  deleteActivityToUser: async (context) => {
    await userHasActivityModel.destroy({
      where: {
        uid: context.currentUser.uid
      }
    })

    return {
      code: 200,
      success: true,
      message: 'activities deletes user'
    }
  }
}

module.exports = userHasActivityMutations
