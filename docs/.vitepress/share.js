import tailwindcss from "@tailwindcss/vite";
import { defineConfig} from "vitepress";
import {base, keywords, name} from "./meta.js";
import { zhCN } from "date-fns/locale";

export const shareConfig = defineConfig({
    base,
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        blog: {
            title: '食光记 · 美食博客',
            description: '记录家常菜谱、烘焙甜点与探店体验，把每一餐都变成值得分享的故事。',
            defaultAuthor: '爱吃的小灶',
            categoryIcons: {
                '家常菜': 'i-[carbon--home]',
                '烘焙': 'i-[carbon--cookie]',
                '探店': 'i-[carbon--restaurant]',
                '饮品': 'i-[carbon--cafe]',
            },
            tagIcons: {
                '中餐': 'i-[carbon--restaurant]',
                '西餐': 'i-[carbon--restaurant]',
                '烘焙': 'i-[carbon--cookie]',
                '甜点': 'i-[carbon--gift]',
                '川菜': 'i-[carbon--fire]',
                '粤菜': 'i-[carbon--restaurant]',
                '快手菜': 'i-[carbon--rocket]',
                '早餐': 'i-[carbon--sunrise]',
                '素食': 'i-[carbon--tree]',
                '面食': 'i-[carbon--restaurant]',
                '汤': 'i-[carbon--restaurant]',
                '咖啡': 'i-[carbon--cafe]',
                '茶饮': 'i-[carbon--cafe]',
                '街头小吃': 'i-[carbon--store]',
            },
            dateConfig: {
                format: 'yyyy年MM月dd日',
                locale: zhCN
            },
            // giscus 评论配置
            // 请前往 https://giscus.app/zh-CN 生成你的配置参数
            giscus: {
                // 是否默认启用评论（所有文章都会显示，除非文章 frontmatter 中设置 comment: false）
                defaultEnable: true,
                // 你的公开 GitHub 仓库，格式：用户名/仓库名
                repo: 'MikhailTail/Blog',
                // 仓库 ID，在 giscus.app 配置页面获取
                repoId: 'R_kgDOUDOV3g',
                // Discussions 分类名称（如 General）
                category: 'General',
                // 分类 ID，在 giscus.app 配置页面获取
                categoryId: 'DIC_kwDOUDOV3s4DEHxK',
                // 映射方式：pathname 表示按页面路径映射讨论
                mapping: 'pathname',
                // 是否启用反应表情
                reactionsEnabled: '1',
                // 输入框位置：top 表示在评论上方
                inputPosition: 'top',
                // 语言
                lang: 'zh-CN',
                // 加载方式：lazy 表示滚动到评论区时再加载
                loading: 'lazy',
                // 亮色主题
                lightTheme: 'light',
                // 暗色主题
                darkTheme: 'transparent_dark',
            },
        },
        // https://vitepress.dev/reference/default-theme-config

        search: {
            provider: 'local',
        },

    },

    vite: {
        plugins: [tailwindcss()],
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme'],
        },
        ssr: {
            noExternal: ['@chunge16/vitepress-blogs-theme']
        },
        build: {
            emptyOutDir: false,
        },
    },

    head: [
        ['meta', { name: 'keywords', content: keywords }],
        ['meta', { name: 'author', content: '食光记' }],
        ['meta', { property: 'og:type', content: 'article' }],
        ['meta', { name: 'application-name', content: name }],
        ['meta', { name: 'apple-mobile-web-app-title', content: name }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

        ['link', { rel: 'shortcut icon', href: `${base}logo.svg` }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}logo.svg` }],
        ['meta', { name: 'theme-color', content: '#e2725b' }],
    ],
});