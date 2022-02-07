import observe from '../utils/intersectionObserver.js'

const lazyPictures = document.querySelectorAll(`.lazy-picture`)

observe(lazyPictures, pictureElement => {
  const img = pictureElement.querySelector('img')
  const sources = pictureElement.querySelectorAll('source')

  // Cleanup tasks after the image loads. Important to
  // define this handler before setting src/srcsets.
  img.onload = () => {
    pictureElement.dataset.loaded = true
    img.removeAttribute('data-src')
  }
  img.onerror = () => {
    pictureElement.dataset.loaded = false
  }

  // Swap in the media sources
  sources.forEach(source => {
    source.sizes = source.dataset.sizes
    source.srcset = source.dataset.srcset
    source.removeAttribute('data-srcset')
    source.removeAttribute('data-sizes')
  })

  // Swap in the image
  img.src = img.dataset.src
})
