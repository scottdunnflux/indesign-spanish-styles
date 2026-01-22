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