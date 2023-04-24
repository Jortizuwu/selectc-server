const { schoolModel } = require('../../models')

const findSchoolByName = async (name) => {
  const dataValues = await schoolModel.findOne({
    where: { name }
  })
  return dataValues
}
const findSchoolByID = async (id) => {
  const dataValues = await schoolModel.findByPk(id)
  return dataValues
}

module.exports = {
  findSchoolByName,
  findSchoolByID
}
