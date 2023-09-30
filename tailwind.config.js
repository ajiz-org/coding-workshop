module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css", "./node_modules/flowbite/**/*.js" , 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [require("@tailwindcss/forms"), require('flowbite/plugin'), require("daisyui")],

};
