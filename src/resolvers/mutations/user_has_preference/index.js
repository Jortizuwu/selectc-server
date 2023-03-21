const { findPreferenceByName } = require('../../../helpers/preference')
const { userHasPreferenceModel } = require('../../../models')

const userHasPreferenceMutations = {
  addPreferenceToUser: async (data, context) => {
    await Promise.all(
      data.arrPreferences.map(async (val) => {
        const { preferenceID } = await findPreferenceByName(val)
        await userHasPreferenceModel.create({
          uid: context.currentUser.uid,
          preferenceID,
        })
      })
    )
    return {
      code: 200,
      success: true,
      message: 'preferences add to user',
    }
  },
  deletePreferenceToUser: async (context) => {
    await userHasPreferenceModel.destroy({
      where: {
        uid: context.currentUser.uid,
      },
    })
    return {
      code: 200,
      success: true,
      message: 'preferences delete',
    }
  },
}

module.exports = userHasPreferenceMutations
