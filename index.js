/**
 * Created by imamudin.naseem on 02/09/16.
 */


(function () {
  'use strict'
  const proto = {
    onVPEnter (changes) {
      const intersectionRect = changes[0].intersectionRect
      if (intersectionRect.height * intersectionRect.width > 0) {
        this.dispatchEvent(this.__onVPEnter)
      }
    },
    createdCallback () {
      this.__onVPEnter = new CustomEvent('onVPEnter')
      this.style.display = 'block'
      this.observer = new IntersectionObserver(this.onVPEnter.bind(this))
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
})()
