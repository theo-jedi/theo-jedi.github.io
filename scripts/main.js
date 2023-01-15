import * as config from "./config.js"
import * as models from "./models.js";

const ui_main_section = document.getElementById("main-section");
const ui_main_logo = document.getElementById("main-logo");
const ui_main_social = document.getElementById("main-social");
const ui_main_buttons = document.getElementById("main-buttons");
const ui_secondary_button = document.getElementById("secondary-button");
const ui_primary_button = document.getElementById("primary-button");

init();

function init() {
    initImages()
    initMainButtons()
    initSocialButtons()
}

function initImages() {
    ui_main_section.style.backgroundImage = config.image.background;
    if (config.image.logo !== undefined) {
        const ui_image = document.createElement("img");
        ui_image.src = config.image.logo;
        ui_main_logo.appendChild(ui_image);
    } else {
        ui_main_logo.remove();
    }
}

function initMainButtons() {
    const secondary_button = new models.IconButton(
        config.text.main_secondary_button_link,
        undefined,
        undefined,
        config.text.main_secondary_button
    );

    const primary_button = new models.IconButton(
        config.text.main_primary_button_link,
        undefined,
        undefined,
        config.text.main_primary_button
    );

    if (secondary_button.visible) {
        iconButton(secondary_button, ui_secondary_button);
    } else {
        ui_primary_button.setAttribute("style", "width: 100%;");
        ui_secondary_button.remove();
    }

    if (primary_button.visible) {
        iconButton(primary_button, ui_primary_button);
    } else {
        ui_secondary_button.setAttribute("style", "width: 100%; margin: 0;");
        ui_primary_button.remove();
    }

    if (!secondary_button.visible && !primary_button.visible) {
        ui_main_buttons.remove();
    }
}

function initSocialButtons() {
    if (Object.keys(config.buttons).length > 0) {
        for (let key in config.buttons) {
            const button = config.buttons[key];
            const ui_button = iconButton(button);
            if (ui_button !== undefined) {
                ui_main_social.appendChild(ui_button);
            }
        }
    } else {
        ui_main_social.remove()
    }
}

function iconButton(button, view) {
    if (button.visible) {
        const ui_button = view !== undefined ? view : document.createElement("a");
        if (button.icon !== undefined) {
            const ui_icon = document.createElement("i");

            if (button.size !== undefined) ui_icon.style.fontSize = button.size + "px";
            ui_icon.className = button.icon;
            ui_button.appendChild(ui_icon);
        }
        if (button.text !== undefined) {
            const ui_text = document.createElement("div");
            ui_text.innerText = button.text;
            ui_button.appendChild(ui_text);
        }
        ui_button.href = button.link;
        return ui_button;
    }
}