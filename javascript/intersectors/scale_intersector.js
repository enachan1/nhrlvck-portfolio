const scale_intersector = () => {
    const fade_selector = document.querySelectorAll(".projects__card");

    const intersection = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.toggle("scale__animation");
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.50
    })

    fade_selector.forEach(anim => {
        intersection.observe(anim)
    })
}
export default scale_intersector