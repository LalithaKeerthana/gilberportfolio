import React from 'react';
import '../style/ProgressBar.css'; // Assuming ProgressBar.css contains necessary styles
import log from './vline.png';
import lo from './hline.png';
import ni from './nine.png';


// Define ProgressBarProps interface
interface ProgressBarProps {
  label: string;
  percentage: number;
}

// ProgressBars component
const ProgressBars: React.FC = () => {
  return (
    <div>
      
      <img className="hline" src={lo} alt="line" />
      <img className="vline" src={log} alt="line" />
      <img className="h1line" src={lo} alt="line" />
      <img className="nine" src={ni} alt="nine" />
      
      <div className="above-text">
        <h1 className='up'>Great Experience</h1><br/>
        Fill appear won’t may make moveth signs. Fourth. Good own. Green you’re moveth us, lesser.
      </div>
      <div className="progress-bars">
        <ProgressBar label="Web Design" percentage={70} />
        <ProgressBar label="Figma" percentage={50} />
        <ProgressBar label="WordPress" percentage={90} />
      </div>
    </div>
  );
};

// ProgressBar component
const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  return (
    <div className="progress-bar">
      <div className="label">{label}</div>
      <div className="progress" style={{ '--percentage': `${percentage}%` }}></div>
    </div>
  );
};

export default  ProgressBars;