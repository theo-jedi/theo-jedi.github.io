export class IconButton {

    constructor(link, icon, size, text) {
        this.link = link;
        this.text = text;
        this.icon = icon;
        this.size = size;
        this.visible = link !== undefined && (text !== undefined || icon !== undefined);
    }
}

export class App {

    constructor(name, description, link, image) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}

export class TextButton {

    constructor(available, unavailable, link) {
        this.available = available;
        this.unavailable = unavailable;
        this.link = link;
        this.enabled = this.link !== undefined;
        this.text = (this.enabled) ? this.available : this.unavailable;
    }
}