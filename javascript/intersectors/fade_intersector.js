const fade_intersector = () => {
    const fade_selector = document.querySelectorAll(".tool__animate");

    const intersection = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.toggle("animate-fade");
                observer.unobserve(entry.target)
            }
        })
    })

    fade_selector.forEach(anim => {
        intersection.observe(anim)
    })
}
export default fade_intersector;