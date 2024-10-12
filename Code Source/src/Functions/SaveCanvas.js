
export const saveCanvasState = (flowElements, edges) => {
    const canvasState = { flowElements, edges };
  
    const canvasStateJSON = JSON.stringify(canvasState);
  
    localStorage.setItem('petriNetCanvas', canvasStateJSON);
  };
  

export const loadCanvasState = () => {
    const canvasStateJSON = localStorage.getItem('petriNetCanvas');
  
    if (canvasStateJSON) {
      const canvasState = JSON.parse(canvasStateJSON);
      return canvasState;
    }
  
    return null;
  };
  