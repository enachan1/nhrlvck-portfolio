const navigation = () => {
    // for animation of button
    const toggler = document.querySelector(".lineNav");
    const anim_line1 = document.querySelector(".line1");
    const anim_line2 = document.querySelector(".line2");

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


    toggler.addEventListener("click", toggled)

}
export default navigation;