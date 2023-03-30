const { validateLogin } = require('../../../helpers/auth')
const { onlyAdmin } = require('../../../helpers/role')
const { schoolModel } = require('../../../models')

const schoolQuerys = {
  getSchools: async (context) => {
    validateLogin(context.currentUser)
    onlyAdmin(context.currentUser)
    return await schoolModel.findAll()
  },
}

module.exports = schoolQuerys
