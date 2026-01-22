# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Adobe InDesign ExtendScript (.jsx) that batch-changes the applied language in all paragraph and character styles from English variants to Spanish.

## Technology

- **Language**: ExtendScript (ES3-based JavaScript dialect for Adobe applications)
- **Target Application**: Adobe InDesign (`#target indesign`)
- **Runtime**: InDesign's built-in scripting engine

## Running the Script

Execute directly from InDesign:
- Window > Utilities > Scripts panel
- Double-click `spa-styles.jsx`

Or via File > Scripts > Run Script and navigate to the file.

## ExtendScript Notes

- Uses ES3 syntax (no `let`/`const`, no arrow functions, no template literals)
- `app` is the global InDesign application object
- `doc.allParagraphStyles` and `doc.allCharacterStyles` return flat arrays including nested styles
- Index 0 is reserved for default styles (`[No Paragraph Style]` and `[None]`), so iteration starts at 1
- Language names are strings like `"English: USA"`, `"Spanish"`, `"Spanish: Castilian"`
