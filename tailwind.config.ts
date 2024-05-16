import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(function ({ addVariant }) {
            addVariant(
                "prose-inline-code",
                '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
            );
        }),
    ],
};
export default config;
