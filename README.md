# vp-notifier

A web component that emits event `onChange` whenever it comes in or goes out of viewport.

#Installation

```bash
npm install vp-notifier --save
```
#Usage

```js
require('vp-notifer')

<x-vp-notifier>
// HTML content
</x-vp-notifier>

document.querySelector('x-vp-notifier')
.addEventListener('onChange', callback)

const callback = x => {
    const rect = x.detail.intersectionRect
    rect.height * rect.width === 0 // component went out of viewport
    rect.height * rect.width > 0   // component came inside viewport
}

```
