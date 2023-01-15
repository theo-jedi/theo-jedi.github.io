const ui_section_main = document.getElementById("main-section");
const ui_section_content = document.getElementById("content-section");

init();

function init() {
    if (ui_section_content.childElementCount === 0) {
        const style = ui_section_main.getAttribute("style");
        ui_section_main.setAttribute("style", "width: 100vw;" + style);
        ui_section_content.remove();
    }
    if (ui_section_main.childElementCount === 0) {
        ui_section_content.setAttribute("style", "width: 100vw;");
        ui_section_main.remove()
    }
}