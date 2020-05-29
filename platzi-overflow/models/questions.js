'use strict'

class Questions {
  constructor(db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('questions')
  }

  async create(data, user) {
    console.log('Data->', data)
    console.log('User->', user)
    const dataQuestion = {
      ...data
    }
    dataQuestion.owner = user
    const question = await this.collection.push()
    question.set(dataQuestion)

    return question.key
  }
}

module.exports = Questions