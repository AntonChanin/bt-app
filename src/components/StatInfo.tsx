import { FC } from 'react';
import { StatInfoProps } from '../types/component';

type Props = Partial<StatInfoProps>;

const StatInfo: FC<Props> = (props) => {
    const { title = '', current = 0, max = 0 } = props;

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
