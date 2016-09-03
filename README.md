# vp-notifier

A web component that emits event `onVPEnter` whenever it comes in, and `onVPExit` whenever it goes out of viewport.

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
document.querySelector('x-vp-notifier')
.addEventListener('onVPExit', callback)


```
