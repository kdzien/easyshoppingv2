
export interface Plan {
    type: string;
    meal: string;
}

export interface DayPlan {
    dayName: string;
    plan: {
        sniadanie?: any;
        obiad?: any;
        kolacja?: any;
    };
}
