/**
 * Created by imamudin.naseem on 02/09/16.
 */


(function () {
  'use strict'
  const proto = {
    onVisibilityChange (changes) {
      const intersectionRect = changes[0].intersectionRect
      if (intersectionRect.height * intersectionRect.width > 0) {
        this.dispatchEvent(this.__onVPEnter)
      }
      else {
        this.dispatchEvent(this.__onVPExit)
      }
    },
    createdCallback () {
      this.__onVPEnter = new CustomEvent('onVPEnter')
      this.__onVPExit = new CustomEvent('onVPExit')
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
})()
