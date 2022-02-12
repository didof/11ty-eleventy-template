const memoized = new Map()

export const toggle = {
  disable(id) {
    btn(id).toggleAttribute('disabled')
  },
}

export const listen = {
  onclick(id, cb) {
    btn(id).addEventListener('click', cb)
  },
}

function btn(id) {
  let button
  if (!(button = memoized.get(id))) {
    button = document.getElementById(id)
    if (!button) return notFound(id)
    memoized.set(id, button)
  }
  return button
}

function notFound(id) {
  console.warn(`<button id="${id}"> was not found.`)
  return {
    addEventListener() {},
  }
}
