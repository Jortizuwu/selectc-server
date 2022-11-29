const { preferenceModel } = require('../../models')

const findPreferenceByName = async (name) => {
  const dataValues = await preferenceModel.findOne({
    where: { name }
  })
  return dataValues
}

module.exports = {
  findPreferenceByName
}
