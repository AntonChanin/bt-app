import { FC } from 'react';

type Props = {
    title: string;
    current: number;
    max: number;
};

const StatInfo: FC<Props> = (props) => {
    const { title, current, max } = props;

    const getNumberStyled = (num: number): string => {
        const x = `${num}`.split('');
        let counter = 1;
        return x.map((n) => {
            if (counter === 3) {
                counter = 0;
                return n + ' ';
            }
            counter += 1;
            return n;
        }).join('');
    };

    return (
        <>
            <h3 className="stat-info_title">{title}</h3>
            <div className="stat-info_data">
                <span>
                    {getNumberStyled(current)}
                </span>
                <span className="stat-info_max">
                    {` / ${getNumberStyled(max)}`}
                </span>
            </div>
            
        </>
    );
};

export default StatInfo;
