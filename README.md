# InDesign Spanish Styles

A simple Adobe InDesign script that changes the language setting from English to Spanish for all paragraph and character styles in a document.

This script addresses a specific use case: you have an InDesign document with pre-existing styles set to an English language variant, and you need to switch them all to Spanish.

## Installation

### Option 1: Download and Drag (Recommended for most users)

1. **Download the script**: Click [`spa-styles.jsx`](spa-styles.jsx) above, then click the download icon (↓) in the top-right of the file view
2. **Open InDesign**
3. **Open the Scripts panel**: Window → Utilities → Scripts
4. **Reveal the User folder**: Right-click "User" in the Scripts panel and choose "Reveal in Finder"
5. **Install**: Drag the downloaded `spa-styles.jsx` into the User folder

### Option 2: Terminal (for InDesign 2025)

Open Terminal and paste:

```bash
cat << 'EOF' > "$HOME/Library/Preferences/Adobe InDesign/Version 20.0/en_US/Scripts/Scripts Panel/spa-styles.jsx"
// Change Language in All Paragraph and Character Styles
// Changes English variants to Spanish

#target indesign

if (app.documents.length === 0) {
    alert("Please open a document first.");
} else {
    var doc = app.activeDocument;
    var changedPara = 0;
    var changedChar = 0;

    // Target language - adjust as needed
    // Options: "Spanish: Castilian", "Spanish: Mexico", etc.
    var targetLanguage = "Spanish";

    // Change Paragraph Styles (start at 1 to skip [No Paragraph Style])
    var pStyles = doc.allParagraphStyles;
    for (var i = 1; i < pStyles.length; i++) {
        try {
            var currentLang = pStyles[i].appliedLanguage.name;
            if (currentLang.indexOf("English") !== -1) {
                pStyles[i].appliedLanguage = targetLanguage;
                changedPara++;
            }
        } catch(e) {
            // Skip styles that can't be changed
        }
    }

    // Change Character Styles (start at 1 to skip [None])
    var cStyles = doc.allCharacterStyles;
    for (var j = 1; j < cStyles.length; j++) {
        try {
            var currentLang = cStyles[j].appliedLanguage.name;
            if (currentLang.indexOf("English") !== -1) {
                cStyles[j].appliedLanguage = targetLanguage;
                changedChar++;
            }
        } catch(e) {
            // Skip styles that can't be changed
        }
    }

    alert("Done!\n\nParagraph styles changed: " + changedPara +
          "\nCharacter styles changed: " + changedChar);
}
EOF
```

### Option 3: Terminal (for all installed InDesign versions)

This installs the script for every InDesign version on your system:

```bash
for dir in "$HOME/Library/Preferences/Adobe InDesign"/Version*/en_US/Scripts/Scripts\ Panel/; do
  [ -d "$dir" ] && cat << 'EOF' > "${dir}spa-styles.jsx"
// Change Language in All Paragraph and Character Styles
// Changes English variants to Spanish

#target indesign

if (app.documents.length === 0) {
    alert("Please open a document first.");
} else {
    var doc = app.activeDocument;
    var changedPara = 0;
    var changedChar = 0;

    // Target language - adjust as needed
    // Options: "Spanish: Castilian", "Spanish: Mexico", etc.
    var targetLanguage = "Spanish";

    // Change Paragraph Styles (start at 1 to skip [No Paragraph Style])
    var pStyles = doc.allParagraphStyles;
    for (var i = 1; i < pStyles.length; i++) {
        try {
            var currentLang = pStyles[i].appliedLanguage.name;
            if (currentLang.indexOf("English") !== -1) {
                pStyles[i].appliedLanguage = targetLanguage;
                changedPara++;
            }
        } catch(e) {
            // Skip styles that can't be changed
        }
    }

    // Change Character Styles (start at 1 to skip [None])
    var cStyles = doc.allCharacterStyles;
    for (var j = 1; j < cStyles.length; j++) {
        try {
            var currentLang = cStyles[j].appliedLanguage.name;
            if (currentLang.indexOf("English") !== -1) {
                cStyles[j].appliedLanguage = targetLanguage;
                changedChar++;
            }
        } catch(e) {
            // Skip styles that can't be changed
        }
    }

    alert("Done!\n\nParagraph styles changed: " + changedPara +
          "\nCharacter styles changed: " + changedChar);
}
EOF
done
```

## Usage

1. Open a document in InDesign
2. Open the Scripts panel: Window → Utilities → Scripts
3. Expand "User" and double-click `spa-styles`
4. A dialog will confirm how many styles were changed

## License

MIT
