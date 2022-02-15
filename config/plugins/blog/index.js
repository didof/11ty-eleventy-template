const slugify = require('slugify')
const lodash = require('lodash')
const pluginTOC = require('eleventy-plugin-toc')

const defaultOptions = {
  postsCollectionName: 'blogPosts',
  categoriesCollectionName: 'blogCategories',
  tagsCollectionName: 'blogTags',
  relativePath: './src/blog/posts/*.md',
}

module.exports = {
  configFunction: function (conf, options = defaultOptions) {
    options = Object.assign(defaultOptions, options)

    const [getAllPosts, getAllPostsReverse] = makeAllPostGetters(
      options.relativePath
    )

    conf.addCollection(options.postsCollectionName, getAllPostsReverse)

    conf.addCollection(options.categoriesCollectionName, collection => {
      const allPosts = getAllPosts(collection)

      const [categories, counters] = getAllCategories(allPosts, toLowerCase)

      return categories.sort(sortByLocale).map(category => ({
        value: category,
        amount: counters[category],
        slug: strToSlug(category),
      }))

      function strToSlug(string) {
        const options = {
          replacement: '-',
          remove: /[&,+()$~%.'":*?<>{}]/g,
          lower: true,
        }

        return slugify(string, options)
      }
    })

    conf.addCollection(options.tagsCollectionName, collection => {
      const allPosts = getAllPosts(collection)

      const [tags, counters] = getAllTags(allPosts, toLowerCase)

      return tags.sort(sortByLocale).map(tag => ({
        value: tag,
        amount: counters[tag],
        slug: strToSlug(tag),
      }))

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

    conf.addFilter('filterByCategory', (posts, targetCategory) => {
      targetCategory = lodash.deburr(targetCategory).toLowerCase()
      return posts.filter(post => post.data.category === targetCategory)
    })

    conf.setLibrary('md', require('./md.js')(conf))

    conf.addFilter('categoryUrl', string => {
      return `categories/${string}`
    })

    conf.addFilter('tagUrl', string => {
      return `tags/${string}`
    })

    conf.addPlugin(pluginTOC)
  },
}

function makeAllPostGetters(relativePath) {
  return [getAll, getAllReverse]

  function getAllReverse(collection) {
    return getAll(collection).reverse()
  }

  function getAll(collection) {
    return collection.getFilteredByGlob(relativePath)
  }
}

function getAllTags(posts, ...cbs) {
  const rawTags = lodash.flattenDeep(
    posts.map(post => {
      return post.data.tags ? post.data.tags : []
    })
  )

  const counters = countOccurrences(rawTags)

  let tags = lodash.uniq(rawTags)

  tags = pipeModificators(tags, cbs)

  return [tags, counters]
}

function getAllCategories(posts, ...cbs) {
  const rawCategories = posts.map(post => {
    const { category } = post.data
    if (!category) {
      console.warn(`The post [${post.data.title}] is missing of a category`)
      process.exit(1)
    }
    if (typeof category !== 'string') {
      console.warn(
        `The post [${post.data.title}] must have a category of type 'string'`
      )
      process.exit(1)
    }
    return category
  })

  const counters = countOccurrences(rawCategories)

  let categories = lodash.uniq(rawCategories)

  categories = pipeModificators(categories, cbs)

  return [categories, counters]
}

function pipeModificators(array, modificators) {
  if (modificators && modificators.length) {
    return array.map(tag => {
      return modificators.reduce((tmp, fn) => {
        tmp = fn(tmp)
        return tmp
      }, tag)
    })
  }

  return array
}

function countOccurrences(rawArray) {
  return rawArray.reduce((counter, item) => {
    counter.hasOwnProperty(item) ? (counter[item] += 1) : (counter[item] = 1)
    return counter
  }, {})
}

function toLowerCase(string) {
  return string.toLowerCase()
}

function sortByLocale(a, b) {
  return a.localeCompare(b, 'en', { sensitivity: 'base' })
}
