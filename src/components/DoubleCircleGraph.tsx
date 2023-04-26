import { FC } from 'react';

import CircleGraph from './CircleGraph';
import StatInfo from './StatInfo';
import { CircleGraphProps, StatInfoProps } from '../types/component';

type Props = {
    innerGraph?: Partial<CircleGraphProps>;
    innerGraphInfo?: Partial<StatInfoProps>;
    outerGraph?: Partial<CircleGraphProps>;
    outerGraphInfo?: Partial<StatInfoProps>;
}

const DoubleCircleGraph: FC<Props> = (props) => {
    const {
        innerGraph = {
            strokeWidth: 40,
            circleSize: 180,
            percentage: 0,
            speed: 2,
            innerRotate: 90,
            maxPercentageInView: 3/4,
            strokeColor: 'orange',
            showpercentage: true,
            percentageUppercase: true,
        },
        innerGraphInfo = {
            title: 'А',
            current: 0,
            max: 100,
        },
        outerGraph = {
            strokeWidth: 5,
            circleSize: 200,
            percentage: 0,
            speed: 2,
            innerRotate: 90,
            maxPercentageInView: 3/4,
            strokeColor: 'gray',
            showpercentage: true,
        },
        outerGraphInfo = {
            title: 'Б',
            current: 0,
            max: 100,
        },   
    } = props;

    return (
        <div className="double-graph"
            style={{ height: (outerGraph.circleSize ?? 200) * 6/5 }}
        >
            <div className="graph-and-stat">
            <div className="outer-graph">
                <CircleGraph {...outerGraph} />
            </div>
            <div className="inner-graph">
                <CircleGraph {...innerGraph} />  
            </div>
            </div>
            <div className="stat-info_block" style={{
                bottom: 285,
                left: 110,
                marginRight: 'auto',
                marginLeft: 'auto',
            }}>
            <StatInfo {...outerGraphInfo} />
            <StatInfo {...innerGraphInfo} />
            </div>
      </div>
    );
};

export default DoubleCircleGraph;
