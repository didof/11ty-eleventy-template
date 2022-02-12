import playground from './playground'

switch (window.location.pathname) {
  case '/':
    break
  case '/playground/':
    playground()
}
