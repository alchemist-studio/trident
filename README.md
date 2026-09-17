# Trident

[View the website](https://alchemist-studio.github.io/trident/)

A minimal, single-page website for Trident, based on sketch 16 of the Current theme.

The small color controls in the header switch between **Cyan** (the default), **Petrol**, and **Ice**, with a 600 ms transition. Keyboard users can tab to the controls and use the arrow, Home, and End keys. Reduced-motion preferences are respected.

## Development

The site uses plain HTML, CSS, and JavaScript, with local fonts and the original Trident logo. No dependencies or build step are required.

Serve this directory with any static server, for example:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publishing

GitHub Pages serves the repository root from the `main` branch. Pushing changes to `main` updates the website. The `.nojekyll` file keeps the site as plain static files.

## Fonts

Geist and Geist Mono are included under the SIL Open Font License. Their license files are in `assets/`.
