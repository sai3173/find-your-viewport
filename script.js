function updateViewportInfo() {
    const width = window.innerWidth; 
    const height = window.innerHeight; 
    const dpr = window.devicePixelRatio; 
    const screenWidth = screen.width; 
    const screenHeight = screen.height; 

    
    document.getElementById('size').textContent = `${width} x ${height}`;
    document.getElementById('device-pixel-ratio').textContent = dpr.toFixed(2); 
    document.getElementById('screen').textContent = `${screenWidth} x ${screenHeight}`;
}


updateViewportInfo();


document.getElementById('ref').addEventListener('click', updateViewportInfo);