import { languages } from '$lib/Localization/Languages';

export function getTimeDifference(startTime: Date, endTime: Date | undefined, language: string): string {
    const currentTime = endTime ? endTime : new Date();
    let timeDifference = currentTime.getTime() - startTime.getTime();
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = 24 * msPerHour;
    const msPerMonth = 30 * msPerDay;
    const msPerYear = 12 * msPerMonth;

    let year_text: string;
    let and_text: string;
    let month_text: string;
    let month_plural_text: string;

    year_text = languages.Resume.Year[language]
    and_text = languages.Resume.And[language]
    month_text = languages.Resume.Month[language]
    month_plural_text = languages.Resume.MonthPlural[language]

    const years = Math.floor(timeDifference / msPerYear);
    timeDifference %= msPerYear;

    const months = Math.floor(timeDifference / msPerMonth);
    timeDifference %= msPerMonth;

    const days = Math.floor(timeDifference / msPerDay);
    timeDifference %= msPerDay;

    const hours = Math.floor(timeDifference / msPerHour);
    timeDifference %= msPerHour;

    const minutes = Math.floor(timeDifference / msPerMinute);

    let result = '';
    if (years > 0) result += `${years} ${year_text}${years > 1 ? 's' : ''}`;
    if (months > 0) {
        if (result !== '') result += ` ${and_text} `;
        result += `${months} ${month_text}${months > 1 ? `${month_plural_text}` : ''}`;
    }
    if (years === 0 && months === 0 && days > 0) {
        if (result !== '') result += ` ${and_text} `;
        result += `${days} day${days > 1 ? 's' : ''}`;
    }
    if (years === 0 && months === 0 && days === 0 && hours > 0) {
        if (result !== '') result += ' and ';
        result += `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    if (years === 0 && months === 0 && days === 0 && hours === 0 && minutes > 0) {
        if (result !== '') result += ' and ';
        result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    return result !== '' ? result : 'less than a minute';
}
