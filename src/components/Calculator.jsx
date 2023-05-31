import { useReducer } from 'react';
import './comp.css';

const initialState = {
  weight: '',
  height: '',
  unit: 'metric',
  result: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEIGHT':
      return { ...state, weight: action.payload };
    case 'SET_HEIGHT':
      return { ...state, height: action.payload };
    case 'SET_UNIT':
      return { ...state, unit: action.payload };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    default:
      return state;
  }
}

function calculateBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } if (bmi < 25) {
    return 'Normal weight';
  } if (bmi < 30) {
    return 'Overweight';
  }
  return 'Obesity';
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    weight, height, unit, result,
  } = state;

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    // eslint-disable-next-line max-len
    if (Number.isNaN(weightValue) || Number.isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      dispatch({ type: 'SET_RESULT', payload: 'Please enter valid input' });
      return;
    }

    let bmi;
    if (unit === 'metric') {
      // Calculate BMI using metric units
      bmi = weightValue / ((heightValue / 100) ** 2);
    } else {
      // Calculate BMI using standard units
      bmi = (weightValue / (heightValue ** 2)) * 703;
    }

    const category = calculateBMICategory(bmi);
    const resultWithCategory = `${bmi.toFixed(2)} (${category})`;
    dispatch({ type: 'SET_RESULT', payload: resultWithCategory });
  };

  const handleWeightChange = (e) => {
    dispatch({ type: 'SET_WEIGHT', payload: e.target.value });
  };

  const handleHeightChange = (e) => {
    dispatch({ type: 'SET_HEIGHT', payload: e.target.value });
  };

  const handleUnitChange = (e) => {
    dispatch({ type: 'SET_UNIT', payload: e.target.value });
  };

  const weightPlaceholder = unit === 'metric' ? 'kilograms' : 'pounds';
  const heightPlaceholder = unit === 'metric' ? 'centimeters' : 'inches';

  return (
    <div className="calculator">
      <label htmlFor="weight">
        Weight:
        <input
          type="text"
          value={weight}
          onChange={handleWeightChange}
          placeholder={weightPlaceholder}
        />
      </label>
      <label htmlFor="height">
        Height:
        <input
          type="text"
          value={height}
          onChange={handleHeightChange}
          placeholder={heightPlaceholder}
        />
      </label>
      <div className="radio-buttons">
        <label htmlFor="metric-radio">
          Metric
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
          />
        </label>
        <label htmlFor="standard-radio">
          Standard
          <input
            type="radio"
            value="standard"
            checked={unit === 'standard'}
            onChange={handleUnitChange}
          />
        </label>
      </div>
      <button type="button" onClick={calculateBMI}>Calculate</button>
      {result && <p>Your BMI is: {result}</p>}
    </div>
  );
}

export default Calculator;
