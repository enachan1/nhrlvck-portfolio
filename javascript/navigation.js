const navigation = () => {
    // for animation of button
    const toggler = document.querySelector(".lineNav");
    const anim_line1 = document.querySelector(".line1");
    const anim_line2 = document.querySelector(".line2");
    const nav_links = document.querySelectorAll(".navigation-link");

    //for toggling navigation
    const navigation = document.querySelector(".navigation-bar");

    //boolean
    let isToggled = false


    const toggled = () => {
        isToggled = !isToggled;

        if(isToggled) {
            navigation.classList.toggle("navigation-show")
            anim_line1.classList.toggle('anim-line1')
            anim_line2.classList.toggle('anim-line2')
        }
        else {
            navigation.classList.toggle("navigation-show")
            anim_line1.classList.toggle('anim-line1')
            anim_line2.classList.toggle('anim-line2')
        }
    }

    const navLinks = () => {
        isToggled = !isToggled;
            
        if(!isToggled) {
            navigation.classList.toggle("navigation-show")
            anim_line1.classList.toggle('anim-line1')
            anim_line2.classList.toggle('anim-line2')
        }
    }


    toggler.addEventListener("click", toggled)

    nav_links.forEach(nav_link => {
        nav_link.addEventListener("click", navLinks)
    })


}
export default navigation;