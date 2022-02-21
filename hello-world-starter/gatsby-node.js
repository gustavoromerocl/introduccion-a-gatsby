const path = require('path')

exports.createPages = ({actions}) => {
  actions.createPage({
    path: '/mi-pagina-dinamica',
    component: path.resolve('src/templates/layout.jsx'),
    context: {}
  })
}