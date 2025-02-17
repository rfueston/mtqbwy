# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

DETAILS:
- MUI: using material for UI components
- Bundler Vite: lighter weight and good for small apps
- Axios: suggested/needed by TanStack

NOTES:
- Primary function testing done on chrome normal and phone view; firefox as secondary.
- 429 Too Many Requests: issue if you load local. need to run on ip address to allow imgur to bypass 429.
- I did not add a way to save state so refresh will clear state. If I were to add it I would create a temp state inside Firebase real-time database and clear either with a user button or on a new search.
- Since project did not include automation I did not include set IDs for UI elements.
- Ran into an annoying node module error due to arm64 with node 20 on mac. If you run into this issue I can provide the legacy dependencies or node_module if needed

Run:
- npm install
- npm run dev and select network
