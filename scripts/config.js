import * as models from "./models.js";
import * as resources from "./resources.js";

export const text = {
    main_secondary_button: resources.text_main_secondary_button,
    main_secondary_button_link: resources.text_main_secondary_button_link,
    main_primary_button: resources.text_main_primary_button,
    main_primary_button_link: resources.text_main_primary_button_link,
    footer_divider: resources.text_footer_divider,
    footer_copyrights: resources.text_footer_copyrights,
    footer_tagline: resources.text_footer_tagline,
    footer_privacy_policy: resources.text_footer_privacy_policy,
    footer_privacy_link: resources.text_footer_privacy_link,
    about_title: resources.text_about_title,
    about_description: resources.text_about_description,
    apps_title: resources.text_apps_title
}

export const image = {
    background: resources.image_main_background,
    logo: resources.image_main_logo
}

export const buttons = {
    github: new models.IconButton(
        resources.button_github_link,
        resources.button_github_icon,
        resources.button_github_size
    ),
    patreon: new models.IconButton(
        resources.button_patreon_link,
        resources.button_patreon_icon
    ),
    telegram: new models.IconButton(
        resources.button_telegram_link,
        resources.button_telegram_icon,
        resources.button_telegram_size
    ),
    instagram: new models.IconButton(
        resources.button_instagram_link,
        resources.button_instagram_icon,
        resources.button_instagram_size
    ),
    email: new models.IconButton(
        resources.button_email_link,
        resources.button_email_icon,
        resources.button_email_size
    )
}

export const apps = {
    wavenote: new models.App(
        resources.app_wavenote_name,
        resources.app_wavenote_description,
        resources.app_wavenote_link,
        resources.app_wavenote_image
    ),
    tike: new models.App(
        resources.app_tike_name,
        resources.app_tike_description,
        resources.app_tike_link,
        resources.app_tike_image
    )
}

export const textButton = (link) => new models.TextButton(
    resources.text_button_available,
    resources.text_button_unavailable,
    link
)