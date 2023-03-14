const bcrypt = require('bcryptjs')
const { GraphQLError } = require('graphql')
const { userModel, activityModel, careerModel } = require('../../models')

const validatePassword = async (old, curr) => {
  if (!(await bcrypt.compare(old, curr))) {
    throw new GraphQLError('error the password is incorret', {
      extensions: {
        code: 400
      }
    })
  }
}

const findUserById = async (uid) => {
  const user = await userModel.findByPk(uid, {
    include: [
      {
        all: true
      },
      {
        model: activityModel,
        include: [
          {
            all: true
          }
        ]
      },
      {
        model: careerModel,
        include: [
          {
            all: true
          }
        ]
      }
    ],
    attributes: {
      exclude: ['password']
    }
  })
  if (!user) {
    throw new GraphQLError('user not found', {
      extensions: {
        code: 'ERRORUSERIMPUT',
        http: {
          status: 401
        }
      }
    })
  }
  return user.dataValues
}

const findUserByEmail = async (email) => {
  const user = await userModel.findOne({ where: { email } })
  if (user) {
    throw new GraphQLError('the email already in use', {
      extensions: {
        code: 'ERRORUSERIMPUT',
        http: {
          status: 401
        }
      }
    })
  }
}

module.exports = {
  validatePassword,
  findUserById,
  findUserByEmail
}
