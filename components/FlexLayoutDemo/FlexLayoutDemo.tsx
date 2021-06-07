import React, { useState } from 'react';

import { flexProperties } from './flexProperties';

const FlexLayoutDemo: React.FC = () => {
  const [property, setProperty] = useState('');
  const [value, setValue] = useState('');
  const [rules, setRules] = useState({});
  
  const onRemove = (item) => {
      const newRules = { ...rules };
      delete newRules[item.property]
      setRules(newRules);
  }
  
  const onAdd = () => {
      setRules({ ...rules, [property]: value });
      setProperty('');
      setValue('');
  };
  
  const activeRule = property && value ? { [property]: value } : {};
  
  return (
    <div>
        <div style={{ display: 'flex', width: '300px', height: '300px', backgroundColor: 'white', ...activeRule, ...rules }}>
            <div style={{ backgroundColor: 'red', width: '50px', height: '50px' }} />
            <div style={{ backgroundColor: 'blue', width: '50px', height: '50px' }} />
            <div style={{ backgroundColor: 'green', width: '50px', height: '50px' }} />
            <div style={{ backgroundColor: 'yellow', width: '50px', height: '50px' }} />
            <div style={{ backgroundColor: 'orange', width: '50px', height: '50px' }} />
        </div>
        <div>
            <select value={property} onChange={(e) => setProperty(e.target.value)}>
                {Object.keys(flexProperties).map((prop) => (
                    <option value={prop} key={prop}>{prop}</option>
                ))}
            </select>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                {(flexProperties[property] || []).map((val) => (
                    <option value={val} key={val}>{val}</option>
                ))}
            </select>
            <button onClick={onAdd}>add</button>
        </div>
        <ul>
          {Object.entries(rules).map(
            ([property, value]) => (
              <li>
                <span>{`${property}: ${value}`}</span>
                <button onClick={() => onRemove({ property, value })}>remove</button>
              </li>
            )
          )}
        </ul>
    </div>
  );
}

export default FlexLayoutDemo;