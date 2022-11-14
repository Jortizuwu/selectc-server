const { validateLogin } = require('../../../helpers/auth')
const { onlyAdmin } = require('../../../helpers/role')
const { roleModel } = require('../../../models')

const roleQuerys = {
  getRoles: async (context) => {
    validateLogin(context.currentUser)
    onlyAdmin(context.currentUser)
    return await roleModel.findAll()
  }
}

module.exports = roleQuerys
