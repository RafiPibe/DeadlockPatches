# Deadlock Patch Notes Website (yoshi im sorry but I can't read the patch notes on the official forums)

A website to read Deadlock Patch Notes better (you don't really have to squint your eyes). This project features a live database to parse, host, and render patch notes using authentic Video Game aesthetic design components (like SVGs, ability icons, and the Valve Occult font).

## Tech Stack
* **Vite + React (TypeScript):** Core frontend framework.
* **Tailwind CSS:** For all the custom grid layouts, custom Valve typography, and strict color themes.
* **Supabase:** Cloud Postgres database for storing and retrieving patch note data.
* **Custom Parser:** An internal parsing engine that reads raw forum text and converts it into structured React components.

---
## Editor Page

1. Open your terminal in this repository.
2. Run `npm run dev`.
3. Go to `http://localhost:5173/editor`.
4. Log in using your Supabase credentials.

Once inside, you can paste the text from Yoshi's forums into the textbox, click **Parse Data**, preview the visually structured output, and **Publish** to send it to the database.

---

## How to Add New Heroes & Abilities

The parsing system uses dictionaries to map text strings to visual icons. When a new hero releases, using these steps to add them to the website:

### Step 1: Add the Images physically
1. **Hero Portrait:** Add their main portrait to `public/images/heroes/`. Ensure the filename is lowercase with hyphens (if any) (e.g., `new-hero.png`).
2. **Hero Name SVG:** Add their styled SVG name to `public/images/heroes/names/`. Ensure the filename uses underscores (if any) (e.g., `new_hero.svg`).
3. **Ability Icons:** Create a folder for them in `public/images/icons/abilities/New Hero/` and place their ability icons inside it.

### Step 2: Register their Dictionary
Open `src/data/abilities.ts`. Write down their abilities in the `heroAbilities` dictionary so the Parser knows how to group em.

```typescript
// The key on the left MUST be completely lowercase.
'new-hero': [
  { 
    name: 'Ability One Title', 
    mappedNames: ['ability one title', 'alias name'], 
    iconUrl: '/images/icons/abilities/New Hero/90px-Ability_One.png' 
  },
  { 
    name: 'Ability Two Title', 
    mappedNames: ['ability two title'], 
    iconUrl: '/images/icons/abilities/New Hero/90px-Ability_Two.png' 
  },
  // ... (add all abilities)
],
```

**Important Rules for `abilities.ts`:**
* The key (`'new-hero'`) **MUST** be strictly lowercase.
* The `mappedNames` array contains all the text phrases the parser should look for in the patch notes to trigger this ability. These **MUST** be strictly lowercase.
* The `iconUrl` is the direct path to the image you added in Step 1.

### Step 3: Parse the Patch
Once the images exist and the dictionary is updated, run the Local Editor to test, paste a test patch note in, click Parse, and the system will then build the cards linking the hero to their corresponding abilities

---

## Typography

The ability titles utilize the `Valve Occult` font.
This requires the physical font file to be present at `public/fonts/valveoracle-semibold.ttf`. 
Tailwind registers this via the `.font-valve` class, which handles rendering ability names in their native letter-casing.