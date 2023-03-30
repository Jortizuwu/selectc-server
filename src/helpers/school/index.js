const { schoolModel } = require('../../models')

const findSchoolByName = async (name) => {
  const dataValues = await schoolModel.findOne({
    where: { name },
  })
  return dataValues
}

module.exports = {
  findSchoolByName,
}
