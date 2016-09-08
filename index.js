/**
 * Created by imamudin.naseem on 02/09/16.
 */

'use strict'

const proto = {
  onVisibilityChange (changes) {
    this.intersectionRect = changes[0].intersectionRect
    this.dispatchEvent(this.onChange)
  },
  createdCallback () {
    this.onChange = new CustomEvent('onChange', {detail: this})
    this.style.display = 'block'
    this.observer = new IntersectionObserver(this.onVisibilityChange.bind(this))
  },
  attachedCallback () {
    this.observer.observe(this)
  },
  detachedCallback () {
    this.observer.unobserve(this)
  }
}
const prototype = Object.assign(Object.create(HTMLElement.prototype), proto)
document.registerElement('x-vp-notifier', {prototype})
