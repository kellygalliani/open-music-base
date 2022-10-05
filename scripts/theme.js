function changeTheme(){
    const themeButton = document.querySelector("#darkMode")
    const themeIcon = document.querySelector("#themeIcon")
    const html = document.querySelector("html")

    themeButton.addEventListener("click", () =>{
        html.classList.toggle("dark-mode")
        themeIcon.classList.toggle("text-white")

        const darkPreference = localStorage.getItem("darkmode")
        if(!darkPreference){
            localStorage.setItem("darkmode", true)    
        }

        if(darkPreference){
            localStorage.removeItem("darkmode")
        }

        if(themeIcon.classList.contains("text-white")){
            themeIcon.src = "../../assets/img/sun.svg"
        } else {
            themeIcon.src = "../../assets/img/moon.svg"
        }

    })
}

changeTheme() 