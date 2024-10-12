import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const CircleMarker = () => {
  useEffect(() => {
    // Create the SVG marker definition for the circle marker
    const circleMarkerElement = (
      <svg style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <marker
            id="circle-marker"
            viewBox="0 0 20 20"
            markerHeight={20}
            markerWidth={20}
            refX={10}
            refY={11}
          >
            <circle cx="10" cy="30" r="30" fill="#1A192B" />
          </marker>
        </defs>
      </svg>
    );

    // Append the circle marker definition to the DOM
    const circleMarkerContainer = document.createElement('div');
    document.body.appendChild(circleMarkerContainer);
    ReactDOM.render(circleMarkerElement, circleMarkerContainer);

    // Clean up the marker definition on component unmount
    return () => {
      document.body.removeChild(circleMarkerContainer);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CircleMarker;
