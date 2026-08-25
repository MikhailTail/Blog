import { defineConfig } from 'vitepress';
import { processData } from '../../src/config/index.js';
import { shareConfig } from './share.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shareConfig,
  lang: 'zh-CN',
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});