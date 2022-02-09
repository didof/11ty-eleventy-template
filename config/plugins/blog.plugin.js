const slugify = require('slugify')
const lodash = require('lodash')

const defaultOptions = {
  postsCollectionName: 'blogPosts',
  categoriesCollectionName: 'blogCategories',
  tagsCollectionName: 'blogTags',
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    conf.addCollection(options.postsCollectionName, collection => {
      return collection.getFilteredByGlob('./src/posts/*.md').reverse()
    })

    conf.addCollection(options.tagsCollectionName, collection => {
      const allPosts = collection.getFilteredByGlob('./src/posts/*.md')

      const [tags, counters] = getAllTags(allPosts, toLowerCase)

      return tags.sort(sortByLocale).map(tag => ({
        title: tag,
        amount: counters[tag],
        slug: strToSlug(tag),
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

function getAllTags(posts, ...cbs) {
  const rawTags = lodash.flattenDeep(
    posts.map(item => {
      return item.data.tags ? item.data.tags : []
    })
  )

  const counters = rawTags.reduce((counter, tag) => {
    counter.hasOwnProperty(tag) ? (counter[tag] += 1) : (counter[tag] = 1)

    return counter
  }, {})

  let tags = lodash.uniq(rawTags)

  if (cbs && cbs.length) {
    tags = tags.map(tag => {
      return cbs.reduce((tmp, cb) => {
        tmp = cb(tmp)
        return tmp
      }, tag)
    })
  }

  return [tags, counters]
}
