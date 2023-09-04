import type { GitHubProject } from "$lib/utils/types";

export const ghProjectNames: string[] = [
    "my-personal-page-svelte",
    "read-docx",
    "dotfiles"
]

export const imgNames: { [key: string]: string; } = {
    "my-personal-page-svelte": "images/my_stuff/my_personal_page.png",
    "read-docx": "images/my_stuff/read_docx.png",
    "dotfiles": "images/my_stuff/dotfiles.webp",

}

let personalPage: GitHubProject = {
    name: 'my-personal-page-svelte',
    description: 'Personal website made with Svelte and Sveltekit',
    author: 'bittersoftware',
    image: 'images/my_stuff/my_personal_page.png',
    avatar: 'https://avatars.githubusercontent.com/u/30754362?v=4',
    lastUpdate: new Date('2023-09-08T00:21:06Z'),
    url: 'https://github.com/bittersoftware/my-personal-page-svelte'
}

let createDocx: GitHubProject = {
    name: 'read-docx',
    description: 'Create Word documents with python for quick and automatic reports',
    author: 'bittersoftware',
    image: 'images/my_stuff/read_docx.png',
    avatar: 'https://avatars.githubusercontent.com/u/30754362?v=4',
    lastUpdate: new Date('2023-09-10T21:32:33Z'),
    url: 'https://github.com/bittersoftware/read-docx'
}

let dotFiles: GitHubProject = {
    name: 'dotfiles',
    description: 'dotfiles for my tmux and neovim',
    author: 'bittersoftware',
    image: 'images/my_stuff/dotfiles.webp',
    avatar: 'https://avatars.githubusercontent.com/u/30754362?v=4',
    lastUpdate: new Date('2023-09-10T21:34:49Z'),
    url: 'https://github.com/bittersoftware/dotfiles'
}

export let fallbackGitHubProjects: GitHubProject[] = [personalPage, createDocx, dotFiles]
