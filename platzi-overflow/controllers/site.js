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

const login = (req, h) => {
  return h.view('login', {
    title: 'Ingrese'
  })
}

module.exports = {
  register: register,
  home: home,
  login: login
}