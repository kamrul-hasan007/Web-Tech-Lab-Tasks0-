const sampleText = document.getElementById('sample-text');
const bgBtn = document.getElementById('bg-btn');
const fontBtn = document.getElementById('font-btn');
const centerBtn = document.getElementById('center-btn');
const resetBtn = document.getElementById('reset-btn');


const colors = ['#f8d7da', '#d1ecf1', '#d4edda', '#fff3cd', '#cce5ff'];
let colorIndex = 0;


let defaultStyle = {
    backgroundColor: sampleText.style.backgroundColor || '',
    fontSize: sampleText.style.fontSize || '18px',
    textAlign: sampleText.style.textAlign || 'left'
};


bgBtn.addEventListener('click', () => {
    sampleText.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});


fontBtn.addEventListener('click', () => {
    let currentSize = window.getComputedStyle(sampleText).fontSize;
    currentSize = parseFloat(currentSize);
    sampleText.style.fontSize = (currentSize + 2) + 'px';
});

centerBtn.addEventListener('click', () => {
    sampleText.style.textAlign = 'center';
});


resetBtn.addEventListener('click', () => {
    sampleText.style.backgroundColor = defaultStyle.backgroundColor;
    sampleText.style.fontSize = defaultStyle.fontSize;
    sampleText.style.textAlign = defaultStyle.textAlign;
    colorIndex = 0;
});
