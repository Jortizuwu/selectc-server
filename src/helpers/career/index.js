const { careerModel, facultyModel } = require('../../models')

const findCareerByName = async (name) => {
  const dataValues = await careerModel.findOne({
    where: { name },
    include: {
      model: facultyModel
    }
  })
  return dataValues
}

module.exports = {
  findCareerByName
}
