import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const shouldGenerateWayfinder =
    process.env.WAYFINDER_GENERATE === 'true' ||
    (process.env.VERCEL !== '1' && process.env.CI !== 'true');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        ...(shouldGenerateWayfinder
            ? [
                  wayfinder({
                      formVariants: true,
                  }),
              ]
            : []),
    ],
});
