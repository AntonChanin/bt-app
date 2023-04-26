import DoubleCircleGraph from './components/DoubleCircleGraph';
import './App.css';

function App() {
  return (
    <div>
      <DoubleCircleGraph
        innerGraph={{
          strokeWidth: 40,
          circleSize: 180,
          percentage: 95,
          speed: 2,
          innerRotate: 90,
          maxPercentageInView: 3/4,
          strokeColor: 'orange',
          showpercentage: true,
          percentageUppercase: true,
        }}
        innerGraphInfo={{
          title: 'ПРОГНОЗ',
          current: 272289,
          max: 283500,
        }}
        outerGraph={{
          strokeWidth: 5,
          circleSize: 200,
          percentage: 96,
          speed: 2,
          innerRotate: 90,
          maxPercentageInView: 3/4,
          strokeColor: 'gray',
          showpercentage: true,
        }}
        outerGraphInfo={{
          title: 'НИТ',
          current: 234840,
          max: 246051,
        }}
      />
    </div>
  );
}

export default App;
