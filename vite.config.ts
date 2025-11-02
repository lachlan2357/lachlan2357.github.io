import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({}), vueJsx({})],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    build: {
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "./index.html"),
                notFound: path.resolve(__dirname, "./404.html")
            }
        }
    }
});
