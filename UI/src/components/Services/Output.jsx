import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Output.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const Output = ({ foodProperty, imgSrc }) => {
  const chartData = {
    labels: ['Proteins', 'Calcium', 'Fat', 'Carbohydrates', 'Vitamins'],
    datasets: [
      {
        label: 'Nutritional Values',
        data: [
          foodProperty[0].protein,
          foodProperty[0].calcium,
          foodProperty[0].fat,
          foodProperty[0].carbohydrates,
          foodProperty[0].vitamins,
        ],
        backgroundColor: [
          'rgba(0, 128, 128, 0.7)',
          'rgba(220, 20, 60, 0.7)',
          'rgba(30, 144, 255, 0.7)',
          'rgba(255, 165, 0, 0.7)',
          'rgba(186, 85, 211, 0.7)',
        ],
        borderColor: [
          'rgba(0, 128, 128, 1)',
          'rgba(220, 20, 60, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(186, 85, 211, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className="output-container">
      <div className="output-card">
        <h1 className="output-title">{foodProperty[0].name}</h1>

        <div className="output-content">
          {imgSrc && (
            <div className="image-wrapper">
              <img src={imgSrc} alt="Captured food" className="output-image" />
            </div>
          )}

          <div className="chart-wrapper">
            <Pie className="chart-pie" data={chartData} options={chartOptions} />
          </div>

          <div className="nutrition-info">
            <h2 className="info-title">Nutritional Breakdown</h2>
            <p>Proteins: {foodProperty[0].protein}g</p>
            <p>Calcium: {foodProperty[0].calcium}mg</p>
            <p>Fat: {foodProperty[0].fat}g</p>
            <p>Carbohydrates: {foodProperty[0].carbohydrates}g</p>
            <p>Vitamins: {foodProperty[0].vitamins}mg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
