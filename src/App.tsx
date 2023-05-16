import React, { useCallback, useState } from 'react';
import { Canvas, View, Layer, Rectangle, Tool } from 'react-paper-bindings';
import { Layout, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import Toolbar from './Components/Toolbar';

import 'antd/dist/reset.css';

const { Content } = Layout;

function App() {
  const [color, setColor] = useState('red');

  const toggleColor = useCallback(() => {
    setColor(color === 'red' ? 'blue' : 'red');
  }, [color]);

  const [activeTool, setActiveTool] = useState('regular-selection');
  const handleChangeTool = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setActiveTool(e.target.value);
  };

  const handleRectangleMouseDown = () => {
    
  }

  const [items, setItems] = useState([]);

  return (
    <>
      <Toolbar activeTool={activeTool} handleChangeTool={handleChangeTool} />
      <Content>
        <Canvas width={1600} height={800} className="graph-paper">
          <View>
            <Layer>
              <Rectangle
                center={[100, 100]}
                fillColor={color}
                size={[50, 50]}
                onClick={toggleColor}
              />
            </Layer>
          </View>
          <Tool
            name="Rectangle"
            active={activeTool === 'rectangle'}
            onMouseDown={handleRectangleMouseDown}
          />
        </Canvas>
      </Content>
    </>
  );
}

export default App;
