import React, { FC } from 'react';

type Props = {
    speed: number;
    strokeWidth: number;
    circleSize: number;
    percentage: number;
    innerRotate?: number;
    showpercentage?: boolean;
};

const CircleGraph:FC<Props> = (props) => {
   const { speed, strokeWidth, circleSize, percentage, showpercentage, innerRotate = 90 } = props;

    const toDasharray = circleSize * 3.14;
    const innerRadius = circleSize / 2 - strokeWidth / 2;
    const outerRadius = circleSize / 2;
    const scale = innerRadius / outerRadius
    const localPercentage = Math.floor(3.14 * (percentage * 3/4) * scale * (circleSize / 100));
    const uniqueModifier = Math.floor(Math.random() * 100000);

    return (<div className={'percentage-circle' + ' ' + 'percentage-circle--' + uniqueModifier}>
    <style>
        {`
            @-webkit-keyframes animate-progress-bar--${uniqueModifier} {
                0% { stroke-dasharray: 0 ${toDasharray}; }
              100% { stroke-dasharray: ${localPercentage} ${toDasharray}; }
            }

           @keyframes animate-progress-bar {
                0% { stroke-dasharray: 0 ${toDasharray}; }
              100% { stroke-dasharray: ${localPercentage} ${toDasharray}; }
            }
            
            .percentage-circle--${uniqueModifier} {
                width: ${circleSize}px;
                height: ${circleSize}px;
            }

            .percentage-circle__circle--${uniqueModifier} {
                animation: animate-progress-bar--${uniqueModifier} ${speed}s cubic-bezier(.87, -.41, .19, 1.44);
                animation-fill-mode: forwards;
            }

            .percentage-inner-circle--${uniqueModifier} {
                width: ${circleSize}px;
                height: ${circleSize}px;
            }

            .percentage-circle__inner-circle--${uniqueModifier} {
                stroke-dasharray: 460 ${toDasharray};
            }
        `}
    </style>
    
    {showpercentage ? (
        <div className="percentage-circle__percentage">
            {percentage}%
        </div>
    ) : false}
    
    <svg
        height={circleSize}
        width={circleSize}
        style={{ transform: `rotateZ(${innerRotate}deg)` }}
    >
        <circle
            cx={outerRadius}
            cy={outerRadius}
            r={innerRadius}
            stroke="lightgrey"
            strokeWidth={strokeWidth}
            className={'percentage-circle__inner-circle' + ' ' + 'percentage-circle__inner-circle--' + uniqueModifier}
            fill="none"
        />
        <circle
            cx={outerRadius}
            cy={outerRadius}
            className={'percentage-circle__circle' + ' ' + 'percentage-circle__circle--' + uniqueModifier}
            r={innerRadius}
            stroke="red"
            strokeWidth={strokeWidth}
            fill="none"
        />
    </svg> 
</div>)
};

export default CircleGraph;
