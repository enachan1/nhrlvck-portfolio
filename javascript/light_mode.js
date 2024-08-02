const light_mode = () => {
const button = document.querySelector(".bulb");

let mode = localStorage.getItem("mode")

mode && document.body.classList.add(mode)

const toggleLightMode = () => {
    document.body.classList.toggle('light-mode')

    if(document.body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light-mode")
    }
    else {
        localStorage.removeItem("mode")
    }
}
button.addEventListener("click", toggleLightMode)

}
export default light_mode