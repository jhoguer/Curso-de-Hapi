'use strict'

const bcrypt = require('bcrypt')

class Users {
  constructor(db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('users')
  }

  async create(data) {
    const user = {
      ...data
    }

    user.password = await this.constructor.encrypt(data.password)
    const newUser = this.collection.push(user)


    return newUser.key
  }

  async validateUser(data) {
    console.log(data)
    const user = {
      ...data
    }
    console.log(user)

    const userQuery = await this.collection.orderByChild('email').equalTo(user.email).once('value')
    const userFound = userQuery.val()
    console.log(userFound)
    if(userFound) {
      const userId = Object.keys(userFound)[0]
      const passwdRight = await bcrypt.compare(user.password, userFound[userId].password)
      const result = (passwdRight) ? userFound[userId] : false

      return result
    }

    return false
  }

  static async encrypt(passwd) {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(passwd, saltRounds)
    
    return hashedPassword
  }
}

module.exports = Users;