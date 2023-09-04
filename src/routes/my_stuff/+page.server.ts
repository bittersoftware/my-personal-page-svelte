import { PRIVATE_GITHUB_API } from '$env/static/private';
import { fallbackGitHubProjects, ghProjectNames, imgNames } from '$lib/data/gitHubProjects';
import type { GitHubProject } from '$lib/utils/types';
import { Octokit } from '@octokit/core';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const octokit = new Octokit({
        auth: PRIVATE_GITHUB_API
    })

    const projectList: GitHubProject[] = []

    for (const projectName of ghProjectNames) {
        const response = await octokit.request(`GET /repos/bittersoftware/${projectName}`, {
            owner: 'OWNER',
            repo: 'REPO',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        if (response.status != 200) {
            return {
                projects:
                    fallbackGitHubProjects
            }

        }

        let parsedData: GitHubProject = {
            name: response.data.name,
            description: response.data.description,
            author: response.data.owner.login,
            image: imgNames[projectName],
            avatar: response.data.owner.avatar_url,
            lastUpdate: response.data.updated_at,
            url: response.data.html_url,
        }


        projectList.push(parsedData)

    };
    console.log(projectList)
    return { projects: projectList }
}

