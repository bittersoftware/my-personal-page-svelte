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
    endTime: Date | string;
    location: string;
    description: string;
    skills: string;
    stack: string;

}

export type JobDescription = {
    companyName: string;
    imageLogo: string;
    workType: string;
    startTime: Date;
    endTime: Date | string;
    position: JobPosition[];
}
