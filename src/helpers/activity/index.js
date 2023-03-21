const { activityModel } = require('../../models')

const findActivityByName = async (name) => {
  const dataValues = await activityModel.findOne({
    where: { name },
  })
  return dataValues
}

module.exports = {
  findActivityByName,
}
