function updateViewportInfo() {
    const width = window.innerWidth; 
    const height = window.innerHeight; 
    const dpr = window.devicePixelRatio; 
    const screenWidth = screen.width; 
    const screenHeight = screen.height; 

    
    document.getElementById('size').textContent = `${width}px  ×   ${height}px`;
    document.getElementById('device-pixel-ratio').textContent = `DPR: ${dpr.toFixed(2)}`; 
    document.getElementById('screen').textContent = `Screen Size: ${screenWidth}px × ${screenHeight}px`;
}


updateViewportInfo();


window.addEventListener('resize', updateViewportInfo);