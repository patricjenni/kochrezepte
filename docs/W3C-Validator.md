# Aufgabenstellung - Aufgabe 4: W3C-Validator

Nutzt den Validator [https://validator.w3.org/](https://validator.w3.org/) von w3 und euren Editor, um Fehler in ihrer Seite zu finden.  
Dokumentiert die wichtigsten max 5 Fehler im Projekt. Macht dazu im Repository einen Ordner docs/, wo ihr Dokumentationen sammeln können.  
TIPP: Schreibt die Doku in Markdown. Schaut euch [Github doku](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) dazu an.  
Schaut euch alle Fehler aber an und korrigiert sie wo notwendig.

# Ergebnis aus W3C-Validator

## index.about

1. **Error**: CSS: `float`: `center` is not a `float` value.

   [From line 151, column 10; to line 151, column 15](https://validator.w3.org/nu/#l151c15)

   `↩ float: **center**;↩ ju`

   Lösung: Anpassung von `footer ul li {`
   `/*display: flex;   => entfernt! */`
   `/*float: center;  => entfernt!   */`
   `justify-content: center;`

2. **Warning**: Section lacks heading. Consider using `h2`-`h6` elements to [add identifying headings to all sections](https://www.w3.org/wiki/HTML/Usage/Headings/Missing "Identifying section elements with headings"), or else use a `div` element instead for any cases where no heading is needed.

   [From line 164, column 1402; to line 164, column 1531](https://validator.w3.org/nu/#l164c1531)

   `reich --> **<section class="intro-section" data-astro-source-file="C:/GitHub/kochrezepte/src/pages/index.astro" data-astro-source-loc="33:36">** <p da`

   Lösung: Anpassung von `<section class="intro-section">` nach `<div class="intro-section">` weil Section immer ein Hitel erwartet, was bei unserem Intro nicht gegen ist.

# Visual Studio Code

Code validaton should better be done in the IDE. For VS Code the following extensions exist:

- CSSTree validator
- HTMLHint
