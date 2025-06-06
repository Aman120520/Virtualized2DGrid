📌 Project: Virtualized 2D Data Grid
🧠 Objective
Efficiently render a 2D grid of size 100,000 rows × 500 columns with vertical and horizontal virtualization in React Native.

🚀 Tech Stack
React Native

FlashList (for vertical virtualization)

FlatList + ScrollView (horizontal virtualization)

Reanimated & GestureHandler (can be optionally integrated)

Optional: RealmDB (for mocked offline-first loading)

🧩 Features
FlashList for rendering massive rows efficiently.

Sticky column headers (top) and sticky row headers (left).

Shared horizontal scroll across header and every row.

Lazy loading more rows (100 at a time).

Horizontal scroll can be triggered from anywhere in the row.

Memoized cells and rows for performance.

## ✏️ Changes Made

1. 🔁 **Converted the entire 2D grid structure into modular components:**

   - Extracted reusable components:
     - `Row.tsx` to render each horizontal row.
     - `ColumnCell.tsx` to render individual cells.
     - Shared constants moved to `gridConstants.ts`.
     - Styles moved to `globalStyles.ts`.

2. 📂 **Restructured the project for better readability and maintainability:**
   ├── App.tsx # Main grid setup (vertical FlatList)
   ├── components/
   │ ├── Row.tsx # Horizontal row component
   │ └── ColumnCell.tsx # Single cell component
   ├── constants/
   │ └── gridConstants.ts # Grid size, cell dimensions
   ├── styles/
   │ └── globalStyles.ts # Common styles

3. 📌 **Updated styles and logic to work with modularized architecture.**

4. ✅ **Updated `README.md`** to include:

- New folder structure
- Component explanations
- APK build instructions
- Contribution-ready project setup

5. 🔧 **Prepared project for GitHub submission:**

- Initialized Git repo and pushed to GitHub
- Linked screenshots folder and prepared metadata
