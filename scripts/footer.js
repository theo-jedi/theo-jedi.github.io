import * as config from "./config.js"

const ui_main_section = document.getElementById("main-section");
const ui_footer = document.getElementById("footer");

init()

function init() {
    if (ui_main_section.childElementCount > 1 || ui_main_section.querySelector("#footer") === undefined) {
        const text_divider = config.text.footer_divider;
        const text_tagline = config.text.footer_tagline;
        const text_privacy = config.text.footer_privacy_policy;
        const link_privacy = config.text.footer_privacy_link;

        const ui_copyrights = document.createElement("span");
        ui_copyrights.innerText = config.text.footer_copyrights + new Date().getFullYear();
        ui_footer.appendChild(ui_copyrights);

        if (text_tagline !== undefined) {
            const ui_tagline = document.createElement("span");
            ui_tagline.innerText = text_tagline;
            divider(text_divider, ui_footer);
            ui_footer.appendChild(ui_tagline);
        }

        if (text_privacy !== undefined && link_privacy !== undefined) {
            const ui_privacy = document.createElement("a");
            ui_privacy.innerText = text_privacy;
            ui_privacy.href = link_privacy;
            divider(text_divider, ui_footer);
            ui_footer.appendChild(ui_privacy);
        }
    } else {
        ui_footer.remove()
    }
}

function divider(text, parent) {
    const ui_divider = document.createElement("div");
    ui_divider.innerText = text;
    parent.appendChild(ui_divider);
}