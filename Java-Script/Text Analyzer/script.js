const analyzeBtn = document.getElementById('analyze-btn');
const inputText = document.getElementById('input-text');
const resultDiv = document.getElementById('result');

analyzeBtn.addEventListener('click', () => {
    const text = inputText.value.trim();

    if (text === "") {
        resultDiv.innerHTML = "<p>Please enter some text to analyze.</p>";
        return;
    }

    
    const charCount = text.length;

    
    const words = text.split(/\s+/).filter(word => word !== "");
    const wordCount = words.length;

    
    const reversedText = text.split("").reverse().join("");


    resultDiv.innerHTML = `
        <p><strong>Total Characters:</strong> ${charCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong> ${reversedText}</p>
    `;
});
