const { validateLogin } = require('../../../helpers/auth')
const { findCareerByName } = require('../../../helpers/career')
const { onlyAdmin } = require('../../../helpers/role')
const { userModel, careerModel, facultyModel } = require('../../../models')

const analityQuerys = {
  getSuccessfulPreferences: async (context) => {
    try {
      validateLogin(context.currentUser)
      onlyAdmin(context.currentUser)
      const usersData = await userModel.findAll({
        include: [
          {
            model: careerModel,
            attributes: ['name', 'description', 'careerID']
          }
        ]
      })

      const data = {
        correct: 0,
        unsuccessful: 0
      }

      let correctCount = 0
      let unsuccessfulCount = 0

      for (const user of usersData) {
        const careers = user?.dataValues?.Careers || []
        careers.sort(
          (a, b) =>
            (b?.user_has_career?.coincidenceValue || 0) -
            (a?.user_has_career?.coincidenceValue || 0)
        )

        if (careers.length > 0) {
          const preferredCareer = user?.preferenceCareer
          const topCareer = careers[0]
          if (preferredCareer !== null && topCareer?.name === preferredCareer) {
            correctCount++
          } else {
            unsuccessfulCount++
          }
        }
      }

      data.correct += correctCount
      data.unsuccessful += unsuccessfulCount

      return { data, code: 200, message: 'success', success: true }
    } catch (error) {
      return error
    }
  },
  getSuccessfulPreferencesForFaculties: async (context) => {
    try {
      validateLogin(context.currentUser)
      onlyAdmin(context.currentUser)
      const usersData = await userModel.findAll({
        include: [
          {
            model: careerModel,
            attributes: ['name', 'description', 'careerID'],
            include: [
              {
                model: facultyModel,
                attributes: ['facultyID']
              }
            ]
          }
        ]
      })

      const data = {
        correct: 0,
        unsuccessful: 0
      }

      let correctCount = 0
      let unsuccessfulCount = 0

      for (const user of usersData) {
        const careers = user?.dataValues?.Careers || []
        careers.sort(
          (a, b) =>
            (b?.user_has_career?.coincidenceValue || 0) -
            (a?.user_has_career?.coincidenceValue || 0)
        )

        if (careers.length > 0) {
          const preferredCareer = await findCareerByName(user?.preferenceCareer)
          const topCareer = careers[0]

          if (
            preferredCareer !== null &&
            topCareer?.dataValues?.Faculty?.dataValues?.facultyID ===
              preferredCareer?.dataValues?.facultyID
          ) {
            correctCount++
          } else {
            unsuccessfulCount++
          }
        }
      }

      data.correct += correctCount
      data.unsuccessful += unsuccessfulCount

      return { data, code: 200, message: 'success', success: true }
    } catch (error) {
      return error
    }
  },
  getMostFrequentCareers: async (context) => {
    try {
      validateLogin(context.currentUser)
      onlyAdmin(context.currentUser)
      const usersData = await userModel.findAll({
        include: [
          {
            model: careerModel,
            attributes: ['name', 'description', 'careerID']
          }
        ]
      })
      const data = {}

      for (const user of usersData) {
        const careers = user?.dataValues?.Careers || []
        careers.sort(
          (a, b) =>
            (b?.user_has_career?.coincidenceValue || 0) -
            (a?.user_has_career?.coincidenceValue || 0)
        )

        if (careers.length > 0) {
          const topCareer = careers[0]
          data[topCareer.name] = (data[topCareer.name] || 0) + 1
        }
      }

      return {
        data: JSON.stringify(data),
        code: 200,
        message: 'success',
        success: true
      }
    } catch (error) {
      return error
    }
  },
  getMostFrequentFaculties: async (context) => {
    try {
      validateLogin(context.currentUser)
      onlyAdmin(context.currentUser)
      const usersData = await userModel.findAll({
        include: [
          {
            model: careerModel,
            attributes: ['name', 'description', 'careerID'],
            include: [{ model: facultyModel, attributes: ['name'] }]
          }
        ]
      })
      const data = {}

      for (const user of usersData) {
        const careers = user?.dataValues?.Careers || []
        careers.sort(
          (a, b) =>
            (b?.user_has_career?.coincidenceValue || 0) -
            (a?.user_has_career?.coincidenceValue || 0)
        )

        if (careers.length > 0) {
          const topCareer = careers[0]
          data[topCareer?.Faculty.dataValues.name] =
            (data[topCareer?.Faculty.dataValues.name] || 0) + 1
        }
      }

      return {
        data: JSON.stringify(data),
        code: 200,
        message: 'success',
        success: true
      }
    } catch (error) {
      return error
    }
  }
}

module.exports = analityQuerys
