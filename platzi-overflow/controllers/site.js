'use strict'

const home = (req, h) => {
  return h.view('index', {
    title: 'home'
  })
}

const register = (req, h) => {
  return h.view('register', {
    title: 'Registro'
  })
}

module.exports = {
  register: register,
  home: home,
}