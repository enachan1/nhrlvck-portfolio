const mask_intersector = () => {

    const aboutAnimation = () => {
        const animate_selector = document.querySelectorAll(".about__container");
        const intersect = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const isIntersect = entry.isIntersecting
                if (isIntersect) {
                    // entry.target.classList.toggle("animate")
                    // observer.unobserve(entry.target)

                    document.querySelectorAll(".about-mask").forEach(anim => {
                        anim.classList.toggle("animate");
                    });

                    document.querySelectorAll(".about-anim_cont").forEach(faded => {
                        faded.classList.toggle("fade");
                    })

                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.70
        })
        if (animate_selector) {
            animate_selector.forEach(container => {
                intersect.observe(container);
            })
        }
    }

    const toolsAnimation = () => {
        const animate_selector = document.querySelectorAll(".tools__container");
        const tools_h1_fade = document.querySelectorAll(".tools-anim-fade")
        const tools_h1_mask = document.querySelectorAll(".tools-anim-mask")
        const intersect = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const isIntersect = entry.isIntersecting
                if (isIntersect) {
                    // entry.target.classList.toggle("animate")
                    // entry.target.classList.toggle("fade")
                    tools_h1_mask.forEach(mask => {
                        mask.classList.toggle("animate")
                    })
                    tools_h1_fade.forEach(fade => {
                        fade.classList.toggle("fade")
                    })

                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.5
        })
            animate_selector.forEach(container => {
                intersect.observe(container);
            })
    }

    const projectAnimation = () => {
        const animate_selector = document.querySelectorAll('.projects__container');
        const pr_fade = document.querySelectorAll(".pr_fade")
        const pr_mask = document.querySelectorAll(".pr_mask")
        const intersect = new IntersectionObserver((entries, observer) =>  {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    pr_mask.forEach(mask => {
                        mask.classList.toggle("animate")
                    })
                    pr_fade.forEach(fade => {
                        fade.classList.toggle("fade")
                    })
                    observer.unobserve(entry.target)
                }
            })
        } , {
            threshold: 0.35
        })

        animate_selector.forEach(container => {
            intersect.observe(container)
        })
    }

    const contactAnimation = () => {
        const animate_selector = document.querySelectorAll('.contact__container');
        const pr_fade = document.querySelectorAll(".contact-fade")
        const pr_mask = document.querySelectorAll(".contact-mask")

        const intersect = new IntersectionObserver((entries, observer) =>  {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    pr_mask.forEach(mask => {
                        mask.classList.toggle("animate")
                    })
                    pr_fade.forEach(fade => {
                        fade.classList.toggle("fade")
                    })
                    observer.unobserve(entry.target)
                }
            })
        } , {
            threshold: 1
        })

        animate_selector.forEach(select => {
            intersect.observe(select)
        })

    }


    toolsAnimation();
    aboutAnimation();
    projectAnimation();
    contactAnimation();
}
export default mask_intersector;