/* ===================================
   Git Guide - Undermapp 1 - JavaScript
   Skapat: 2026-01-17
   =================================== */

// ====================================
// Initialisering
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Git Guide - Undermapp 1 laddad');
});

// ====================================
// FUNKTION: Kopiera kod
// ====================================
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;
    
    const text = codeElement.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        // Visa feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Kopierad!';
        button.style.background = '#2ea44f';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Kunde inte kopiera:', err);
        alert('Kunde inte kopiera. Markera texten manuellt.');
    });
}

// ====================================
// FUNKTION: Kontrollera quiz-svar
// ====================================
function checkAnswer(questionNumber, selectedAnswer) {
    // Definiera rätta svar
    const correctAnswers = {
        1: 'B', // .git/ finns i AI/
        2: 'C', // git status fungerar från undermapp
        3: 'B'  // mkdir 2 ska köras från AI/
    };
    
    const answerDiv = document.getElementById('answer' + questionNumber);
    const correct = correctAnswers[questionNumber] === selectedAnswer;
    
    // Förklaringar
    const explanations = {
        1: {
            correct: '✅ Helt rätt! .git/-mappen finns i AI/ (repository-roten), inte i undermapparna.',
            incorrect: '❌ Fel. .git/-mappen finns i AI/ (repository-roten), INTE i undermapparna. Det är därför mapp "1" är en del av samma repository.'
        },
        2: {
            correct: '✅ Korrekt! Git letar automatiskt efter .git/ uppåt i mappstrukturen och hittar den i AI/. Du kan köra de flesta Git-kommandon från undermappar.',
            incorrect: '❌ Fel. Git fungerar från undermappar! Git letar automatiskt uppåt efter .git/ och hittar den i AI/. Du kan köra git status, git add, git commit etc. från mapp "1".'
        },
        3: {
            correct: '✅ Rätt! Du ska skapa syster-mappar från repository-roten (AI/). Om du kör mkdir 2 från mapp "1" skapar du AI/1/2/ istället för AI/2/.',
            incorrect: '❌ Fel. Du ska vara i AI/ (rot) när du skapar syster-mappar. Om du kör mkdir 2 från mapp "1" skapar du AI/1/2/ istället för AI/2/.'
        }
    };
    
    // Visa resultat
    answerDiv.className = 'answer ' + (correct ? 'correct' : 'incorrect');
    answerDiv.innerHTML = '<strong>' + (correct ? 'Rätt!' : 'Fel!') + '</strong><br>' + 
                          (correct ? explanations[questionNumber].correct : explanations[questionNumber].incorrect);
}

console.log('✅ Undermapp 1 guide redo!');
