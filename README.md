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
