import * as config from "./config.js"

const ui_section = document.getElementById("about-block");
const ui_title = document.getElementById("about-title");
const ui_description = document.getElementById("about-description");

init(config.text.about_description !== undefined);

function init(visible) {
    if (visible) {
        ui_title.innerText = config.text.about_title;
        ui_description.innerText = config.text.about_description;
    } else {
        ui_section.remove()
    }
}