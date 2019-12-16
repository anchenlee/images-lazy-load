const io = new IntersectionObserver((entries) => {
    entries.forEach((IntersectionObserverEntry) => {
        if (IntersectionObserverEntry.isIntersecting) {
            const { target } = IntersectionObserverEntry
            const { src } = target.dataset
            if (target.src !== src) {
                target.src = src
            }
            io.unobserve(target)
        }
    })
})
export default {
    install(Vue) {
        Vue.directive('lazy-load', {
            bind(el) {
                io.observe(el)
            },
        })
    },
}
