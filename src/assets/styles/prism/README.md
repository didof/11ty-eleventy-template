Go to something like [prism-themes](https://github.com/PrismJS/prism-themes) and copy past in this folder the `.css`.

Now remember to add into `base.njk` head tag (or anywhere you think it's best):

```html
<link rel="stylesheet" type="text/css" href="/assets/styles/prism/solarized-dark-atom.css"/>
```

> i.g.:
> 
> `/assets/styles/prims/<filename>.css[?v={{ version }}]`