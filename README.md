# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

### Aus welchen Komponenten besteht die Software?

Wenn unser Astro Projekt den Build Prozess durchläuft entstehen HTML und CSS Dateien als Build Artifakte. Zudem werden alle eingebetteten Dateien mitgeliefert.

### Welche Commands sind relevant?

Um das Website Projekt zu builden wird das Kommando `astro build` benötigt.

### Wie wird die Website aktualisiert?

Unser Projekt wird mit einer CICD Pipeline (GitHub Actions) bei jedem push auf den main branch erstellt (build) und auf GitHub Pages veröffentlicht.

### Wie wird die Website zum Browser ausgeliefert? (Welcher Server nutzt ihr?)

Da GitHub Pages verwendet wird, liegen die Daten (HTML, CSS, Bilder) auf einem Server von GitHub (bzw. irgendwo in der Cloud). Die Anforderungen an den Webserver sind minimal. Dieser muss in der Lage sein unsere Dateien an Browser auszuliefern (kein PHP oder JAVA Umgebung notwendig).

1. Ein Browser macht einen HTTP Get Request auf https://patricjenni.github.com/kochrezepte
2. Der Webserver liefert die angefragten Dateien an den Browser
3. Der Browser rendert die Page

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
