type CircleGraphProps = {
    speed: number;
    strokeWidth: number;
    circleSize: number;
    percentage: number;
    innerRotate: number;
    maxPercentageInView: number;
    bodyColor: string;
    strokeColor: string;
    percentageUppercase: boolean
    showpercentage: boolean;
};

type StatInfoProps = {
    title: string;
    current: number;
    max: number;
};

export type { CircleGraphProps, StatInfoProps };
