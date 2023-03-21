const { careerModel } = require('../../models')

const findCareerByName = async (name) => {
  const dataValues = await careerModel.findOne({
    where: { name },
  })
  return dataValues
}

module.exports = {
  findCareerByName,
}
