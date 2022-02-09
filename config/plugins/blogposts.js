const slugify = require('slugify')
const lodash = require('lodash')

const defaultOptions = {
  postsCollectionName: 'blogposts',
  categoriesCollectionName: 'blogCategories',
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(options, defaultOptions)

    conf.addCollection(options.postsCollectionName, collection => {
      return collection.getFilteredByGlob('./src/posts/*.md').reverse()
    })

    conf.addCollection(options.categoriesCollectionName, collection => {
      const allPosts = collection.getFilteredByGlob('./src/posts/*.md')

      const [categories, counters] = getAllCategories(allPosts, toLowerCase)

      return categories.sort(sortByLocale).map(category => ({
        title: category,
        amount: counters[category],
        slug: strToSlug(category),
      }))

      function toLowerCase(string) {
        return string.toLowerCase()
      }

      function sortByLocale(a, b) {
        return a.localeCompare(b, 'en', { sensitivity: 'base' })
      }

      function strToSlug(string) {
        const options = {
          replacement: '-',
          remove: /[&,+()$~%.'":*?<>{}]/g,
          lower: true,
        }

        return slugify(string, options)
      }
    })

    conf.addFilter('include', (arr, path, value) => {
      value = lodash.deburr(value).toLowerCase()
      return arr.filter(item => {
        let pathValue = lodash.get(item, path)
        pathValue = lodash.deburr(pathValue).toLowerCase()
        return pathValue.includes(value)
      })
    })
  },
}

function getAllCategories(posts, ...cbs) {
  const rawCategories = lodash.flattenDeep(
    posts.map(item => {
      return item.data.categories ? item.data.categories : []
    })
  )

  const counters = rawCategories.reduce((counter, category) => {
    counter.hasOwnProperty(category)
      ? (counter[category] += 1)
      : (counter[category] = 1)

    return counter
  }, {})

  let categories = lodash.uniq(rawCategories)

  if (cbs && cbs.length) {
    categories = categories.map(category => {
      return cbs.reduce((tmp, cb) => {
        tmp = cb(tmp)
        return tmp
      }, category)
    })
  }

  return [categories, counters]
}
