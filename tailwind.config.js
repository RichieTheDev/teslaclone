/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Model3: "url('./assets/Model3p.jpg')",
        ModelS: "url('./assets/ModelSj.jpg')",
        ModelY: "url('./assets/ModelYj.jpg')",
        Accesories: "url('./assets/Accesoriesj.jpg')",
        Modelx: "url('./assets/ModelXj.jpg')",
        SolarPanels: "url('./assets/SolarPanelsj.jpg')",
        SolarRoof: "url('./assets/SolarRoofj.webp')",
      },
    },
  },
  plugins: [],
};
