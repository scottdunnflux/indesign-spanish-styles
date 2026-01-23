# InDesign Spanish Styles

A simple Adobe InDesign script that changes the language setting from English to Spanish for all paragraph and character styles in a document.

This script addresses a specific use case: you have an InDesign document with pre-existing styles set to an English language variant, and you need to switch them all to Spanish.

## Installation

### Option 1: Download and Drag (Recommended for most users)

1. **Download the script**: Click [`spa-styles.jsx`](spa-styles.jsx) above, then click the "download raw file" icon (↓) in the top-right of the file view
2. **Open InDesign**
3. **Open the Scripts panel**: Window → Utilities → Scripts
4. **Reveal the User folder**: Right-click "User" in the Scripts panel and choose "Reveal in Finder"
5. **Install**: Drag the downloaded `spa-styles.jsx` into the User folder

### Option 2: macOS Terminal (for InDesign 2025)


Open Terminal and paste:

```bash
curl https://raw.githubusercontent.com/scottdunnflux/indesign-spanish-styles/refs/heads/main/spa-styles.jsx > "$HOME/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/spa-styles.jsx"
```


### Option 3: macOS Terminal (for all installed InDesign versions)

This installs the script for every InDesign version on your system:

```bash
for dir in "$HOME/Library/Preferences/Adobe InDesign"/Version*/en_US/Scripts/Scripts\ Panel/; do
  [ -d "$dir" ] && curl https://raw.githubusercontent.com/scottdunnflux/indesign-spanish-styles/refs/heads/main/spa-styles.jsx > "${dir}spa-styles.jsx"
done
```

## Usage

1. Open a document in InDesign
2. Open the Scripts panel: Window → Utilities → Scripts
3. Expand "User" and double-click `spa-styles`
4. A dialog will confirm how many styles were changed

## License

MIT
