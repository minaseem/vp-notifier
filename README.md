# vp-notifier

A web component that emits an event `onVPEnter` whenever it comes inside viewport.

#installation

```bash
npm install vp-notifier --save
```
#usage

```js
require('vp-notifer')

<x-vp-notifier>
// HTML content
</x-vp-notifier>

document.querySelector('x-vp-notifier')
.addEventListener('onVPEnter', callback)


```
