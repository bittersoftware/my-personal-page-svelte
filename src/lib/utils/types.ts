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
    workType: string;
    startTime: Date;
    endTime: Date | undefined;
    position: JobPosition[];
}
