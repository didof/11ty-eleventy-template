const memoized = new Map()

window.$toggle = {
  disable(id) {
    el(id).toggleAttribute('disabled')
  },
}

window.$listen = {
  onclick(id, cb) {
    el(id).addEventListener('click', cb)
  },
}

function el(id) {
  let el
  if (!(el = memoized.get(id))) {
    el = document.getElementById(id)
    if (!el) return notFound(id)
    memoized.set(id, el)
  }
  return el
}

function notFound(id) {
  console.warn(`<button id="${id}"> was not found.`)
  return {
    addEventListener() {},
  }
}
