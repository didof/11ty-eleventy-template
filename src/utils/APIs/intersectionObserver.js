module.exports = function observe(targets, onIntersection) {
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onIntersection(entry.target)
        self.unobserve(entry.target)
      }
    })
  })
  if (targets.length === 1) {
    observer.observe(targets[0])
  } else {
    // TODO remove arrow function
    targets.forEach(target => observer.observe(target))
  }
}
