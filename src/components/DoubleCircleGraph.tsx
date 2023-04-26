import { FC } from 'react';

import CircleGraph from './CircleGraph';
import StatInfo from './StatInfo';

const DoubleCircleGraph: FC = () => {
    return (
        <>
            <div
            className="graph-and-stat"
            style={{
                margin: 'auto',
            }}
            >
            <div className="outer-graph">
                <CircleGraph
                    strokeWidth={5}
                    circleSize={200}
                    percentage={96}
                    speed={2}
                    innerRotate={90}
                    maxPercentageInView={3/4}
                    strokeColor="gray"
                    showpercentage
                />
            </div>
            <div className="inner-graph">
                <CircleGraph
                    strokeWidth={40}
                    circleSize={180}
                    percentage={95}
                    speed={2}
                    innerRotate={90}
                    maxPercentageInView={3/4}
                    strokeColor="orange"
                    showpercentage
                    percentageUppercase
                />  
            </div>
            </div>
            <div className="stat-info_block" style={{
                bottom: 285,
                left: 110,
                marginRight: 'auto',
                marginLeft: 'auto',
            }}>
            <StatInfo title="НИТ" current={234840} max={246051}/>
            <StatInfo title="ПРОГНООЗ" current={272289} max={283500}/>
            </div>
      </>
    );
};

export default DoubleCircleGraph;
