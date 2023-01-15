import * as config from "./config.js"

const ui_section = document.getElementById("apps-block");
const ui_title = document.getElementById("apps-title");
const ui_content = document.getElementById("content-apps");
const ui_apps = document.getElementById("apps-list");
const ui_name = document.getElementById("app-name");
const ui_description = document.getElementById("app-description");
const ui_link = document.getElementById("app-link");
const ui_button = document.getElementById("app-button");

const base_height = parseInt(getComputedStyle(ui_content).height);

init(Object.keys(config.apps).length > 0);

function init(visible) {
    if (visible) {
        ui_title.innerText = config.text.apps_title;
        for (let key in config.apps) {
            const app = config.apps[key];

            const ui_block = document.createElement("div");
            const ui_image = document.createElement("img");

            ui_content.addEventListener("mouseleave", function () { hide() });
            ui_block.addEventListener("mouseover", function () { show(app) });

            ui_block.appendChild(ui_image);
            ui_apps.appendChild(ui_block);

            ui_image.src = app.image;
        }
    } else {
        ui_section.remove();
    }
}

function show(app) {
    const btn = config.textButton(app.link);

    ui_name.innerText = app.name;
    ui_description.innerText = app.description;
    ui_button.innerText = btn.text;
    btn.enabled ? ui_link.href = btn.link : ui_link.removeAttribute("href");

    changeHeight(base_height + ui_name.clientHeight + ui_description.clientHeight + ui_button.clientHeight);
    changeVisibility(true, ui_name, ui_description, ui_link);
}

function hide() {
    changeHeight(base_height);
    changeVisibility(false, ui_name, ui_description, ui_link);
}

function changeHeight(height) {
    ui_content.style.height = height + "px";
}

function changeVisibility(visible, ...views) {
    views.forEach(view => {
        if (visible) {
            view.style.visibility = "visible";
            view.style.opacity = "1";
        } else {
            view.removeAttribute("style");
        }
    })
}