# Fonts

Download any font and put it in this folder.

let's say you picked `Inter-3.19.var` and you want to refer to it as `my-primary-font`.


```css
@font-face {
  font-family: 'my-primary-font';
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  src: url('/assets/fonts/Inter-3.19.var.woff2') format('woff2');
}

html {
  font-family: 'my-primary-font', sans-serif;
}
```

Still, it needs to be downloaded. In `bade.njk` or anywhere you think it's best:

```html
<link rel="preload" href="/assets/fonts/Inter-3.19.var.woff2" as="font" type="font/woff2" crossorigin>
```

> Note:
> 
> Ensure that any `<links>` relating to fonts are preceded by `<link rel="preconnect" href="/" crossorigin>`.
> > it's there by default.