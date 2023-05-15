import React, { useCallback, useState } from 'react';
import { Canvas, View, Layer, Rectangle } from 'react-paper-bindings';

function App() {
  const [color, setColor] = useState('red');

  const toggleColor = useCallback(() => {
    setColor(color === 'red' ? 'blue' : 'red');
  }, [color]);

  return (
    <Canvas width={400} height={300} className="graph-paper">
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
    </Canvas>
  );
}

export default App;
