export type Project = {
    name: string;
    image: string;
    description: string;
};

export type Language = {
    flag: string;
    language: string;
}

export type JobPosition = {
    positionTitle: string;
    startTime: Date;
    endTime: Date | undefined;
    location: string;
    description: string;
    projects: string;
    stack: string;
}

export type JobDescription = {
    companyName: string;
    imageLogo: string;
    startTime: Date;
    endTime: Date | undefined;
    position: JobPosition[];
}

export type GitHubProject = {
    name: string;
    description: string;
    author: string;
    image: string;
    avatar: string;
    lastUpdate: Date;
    url: string;
}

export type YouTubeVideo = {
    url: string;
    index: number;
}

export type NavItem = {
    title: string;
    href: string;
};

