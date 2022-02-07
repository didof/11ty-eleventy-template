const path = require('path')
const Image = require('@11ty/eleventy-img')
const classNames = require('classnames')
const escape = require('lodash.escape')
const outdent = require('outdent')

const ImageWidths = {
  ORIGINAL: null,
  PLACEHOLDER: 24,
}

module.exports = async function imageShortcode(
  relativeSrc,
  alt,
  className,
  widths = [400, 800, 1280],
  baseFormat = 'jpeg',
  optimizedFormats = ['webp'],
  sizes = '100vw'
) {
  const { dir } = path.parse(relativeSrc)
  const fullSrc = path.join('src', relativeSrc)

  const imageMetadata = await Image(fullSrc, {
    widths: [ImageWidths.ORIGINAL, ImageWidths.PLACEHOLDER, ...widths],
    formats: [...optimizedFormats, baseFormat],
    outputDir: path.join('public', dir),
    urlPath: dir,
    filenameFormat: function (id, src, width, format, options) {
      return `${id}-${width}.${format}`
    },
  })

  // Map each unique format (e.g., jpeg, webp) to its smallest and largest images
  const formatSizes = Object.entries(imageMetadata).reduce(
    (formatSizes, [format, images]) => {
      if (!formatSizes[format]) {
        const placeholder = images.find(
          image => image.width === ImageWidths.PLACEHOLDER
        )
        // 11ty sorts the sizes in ascending order under the hood
        const largestVariant = images[images.length - 1]

        formatSizes[format] = {
          placeholder,
          largest: largestVariant,
        }
      }
      return formatSizes
    },
    {}
  )

  // Chain class names w/ the classNames package; optional
  const picture = `
<picture class="${classNames('lazy-picture', className)}">
  ${Object.values(imageMetadata)
    // Map each format to the source HTML markup
    .map(formatEntries => {
      // The first entry is representative of all the others since they each have the same shape
      const { format: formatName, sourceType } = formatEntries[0]

      const placeholderSrcset = formatSizes[formatName].placeholder.url
      const actualSrcset = formatEntries
        // We don't need the placeholder image in the srcset
        .filter(image => image.width !== ImageWidths.PLACEHOLDER)
        // All non-placeholder images get mapped to their srcset
        .map(image => image.srcset)
        .join(', ')

      return `<source type="${sourceType}" srcset="${placeholderSrcset}" data-srcset="${actualSrcset}" data-sizes="${sizes}">`
    })
    .join('\n')}
  <img
    src="${formatSizes[baseFormat].placeholder.url}"
    data-src="${formatSizes[baseFormat].largest.url}"
    width="${formatSizes[baseFormat].largest.width}"
    height="${formatSizes[baseFormat].largest.height}"
    alt="${escape(alt)}"
    class="lazy-img"
    loading="lazy">
</picture>`

  return outdent`${picture}`
}
