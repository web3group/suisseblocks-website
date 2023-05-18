import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dsv from "@rollup/plugin-dsv";
import { VitePluginRadar } from 'vite-plugin-radar'
import sitemap from 'vite-plugin-sitemap';


const names = [
  'funds',
  'nft-realEstate',
  'membership',
  'benefits',
  'about',
  'buy',
  'private-invest',
  'institutional-invest',
  'bank-wealth-managers',
  'family-offices',
  'brokers-advisors'
]
const dynamicRoutes = names.map(name => `/en/${name}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dsv(),
  VitePluginRadar({
    // Google Tag Manager (multiple tag can be set with an array)
    gtm: {
      id: 'GTM-TKWV4LC',
    },
  }),
  sitemap({ dynamicRoutes }),


  ],
});
