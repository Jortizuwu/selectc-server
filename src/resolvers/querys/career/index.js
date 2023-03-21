const { careerModel } = require('../../../models')

const careerQuerys = {
  getCareers: async () => {
    try {
      const careers = await careerModel.findAll({
        include: [
          {
            all: true,
          },
        ],
      })
      return careers
    } catch (error) {
      return error
    }
  },
  getCareerById: async (args) => {
    try {
      const career = await careerModel.findByPk(args.id)
      return {
        career,
        code: 200,
        success: true,
        message: 'careera find success',
      }
    } catch (error) {
      return error
    }
  },
}

module.exports = careerQuerys
