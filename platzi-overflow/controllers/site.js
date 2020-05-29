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

const fileNotFound = (req, h) => {
  const response = req.response
  if (response.isBoom && response.output.statusCode === 404) {
    return h.view('404', {}, { layout: 'error-layout' }).code(404)
  }

  return h.continue
}

const ask = (req, h) => {
  if (!req.state.user) {
    return h.redirect('/login')
  }

  return h.view('ask', {
    title: 'Crear pregunta',
    user: req.state.user
  })
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
  fileNotFound: fileNotFound,
  notFound: notFound,
  login: login,
  ask: ask
}