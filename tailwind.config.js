/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    utilities: {
      "clip-path-arrow": {
        "clip-path": "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};
