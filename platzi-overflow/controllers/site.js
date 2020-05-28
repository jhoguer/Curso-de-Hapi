'use strict'

const home = (req, h) => {
  return h.view('index', {
    title: 'home',
    user: req.state.user
  })
}

const register = (req, h) => {
  if (req.state.user) {
    return h.redirect('/')
  }
  return h.view('register', {
    title: 'Registro',
    user: req.state.user
  })
}

const login = (req, h) => {
  if (req.state.user) {
    return h.redirect('/')
  }
  return h.view('login', {
    title: 'Ingrese',
    user: req.state.user
  })
}

const notFound = (req, h) => {
  return h.view('404', {}, { layout: 'error-layout' }).code(404)
}

// const logout = (req, h) => {
//   return h.view('index', {
//     title: 'home',
//     user: req.sta
//   })
// }

module.exports = {
  register: register,
  home: home,
  notFound: notFound,
  login: login
}