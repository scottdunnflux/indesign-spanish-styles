# InDesign Spanish Styles

A simple Adobe InDesign script that changes the language setting from English to Spanish for all paragraph and character styles in a document.

This script addresses a specific use case: you have an InDesign document with pre-existing styles set to English language, and you need to switch them all to Spanish.

## Installation

### Option 1: Download and Drag (Recommended for most users)

1. **Download the script**: Right-click [`styles-to-spa.jsx RAW`](https://github.com/scottdunnflux/indesign-spanish-styles/raw/refs/heads/main/styles-to-spa.jsx) and choose "Save Link As" (or Option-click on macOS).
2. **Open InDesign**
3. **Open the Scripts panel**: Window → Utilities → Scripts
4. **Reveal the User folder**: Right-click "User" in the Scripts panel and choose "Reveal in Finder".
5. **Install**: Drag the downloaded `styles-to-spa.jsx` into that User folder.

### Option 2: macOS Terminal (for InDesign 2025)


Open Terminal and paste:

```bash
curl https://raw.githubusercontent.com/scottdunnflux/indesign-spanish-styles/refs/heads/main/styles-to-spa.jsx > "$HOME/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/styles-to-spa.jsx"
```


### Option 3: macOS Terminal (for all installed InDesign versions)

This installs the script for every InDesign version on your system:

```bash
for dir in "$HOME/Library/Preferences/Adobe InDesign"/Version*/en_US/Scripts/Scripts\ Panel/; do
  [ -d "$dir" ] && curl https://raw.githubusercontent.com/scottdunnflux/indesign-spanish-styles/refs/heads/main/styles-to-spa.jsx > "${dir}styles-to-spa.jsx"
done
```

## Usage

1. Open a document in InDesign
2. Open the Scripts panel: Window → Utilities → Scripts
3. Expand "User" and double-click `styles-to-spa.jsx`
4. A dialog will confirm how many styles were changed

## Creating an English Version (Advanced)

To create a version that changes styles to English instead:

1. Duplicate `styles-to-spa.jsx` and rename it to `styles-to-eng.jsx`
2. Open the new file in a text editor
3. Comment out line 15: `//var targetLanguage = "Spanish";`
4. Uncomment line 16: `var targetLanguage = "English: USA";`
5. Save and use as normal

## License

MIT
