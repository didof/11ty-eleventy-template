;(async pathname => {
  switch (pathname) {
    case '/':
      break
    case '/playground/':
      await import(`./playground`)
  }
})(window.location.pathname)
