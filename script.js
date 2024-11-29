function updateViewportInfo() {
    const width = window.innerWidth; 
    const height = window.innerHeight; 
    const dpr = window.devicePixelRatio; 
    const screenWidth = screen.width; 
    const screenHeight = screen.height; 

    
    document.getElementById('size').innerHTML = `${width}<span class="smaller-px">px</span>  ×   ${height}<span class="smaller-px">px</span>`;
    document.getElementById('device-pixel-ratio').textContent = `DPR: ${dpr.toFixed(2)}`; 
    document.getElementById('screen').innerHTML = `Screen Size: ${screenWidth}<span class="smaller-px">px</span> × ${screenHeight}<span class="smaller-px">px</span>`;
}


updateViewportInfo();


window.addEventListener('resize', updateViewportInfo);