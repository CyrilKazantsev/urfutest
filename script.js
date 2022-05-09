let underlineRegistration = document.createElement('div');
let link = document.getElementById("3")
underlineRegistration.className = "step__info-link-underline";
underlineRegistration.style.width = `${link.offsetWidth}px`
link.after(underlineRegistration)