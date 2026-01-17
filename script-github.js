/* ===================================
   Git & GitHub Guide - JavaScript
   Skapat: 2026-01-17
   Innehåller interaktiva funktioner
   =================================== */

// ====================================
// Initialisering vid sidladdning
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Git & GitHub Guide laddad');
    generateStructureDiagram();
    addCopyFeedback();
});

// ====================================
// FUNKTION: Generera struktur-diagram
// ====================================
function generateStructureDiagram() {
    const diagram = document.getElementById('structureDiagram');
    if (!diagram) return;
    
    const structure = `
<strong>AI/</strong> (Ett Git repository)
├── .git/                 ← Lokal Git-databas (skapas av git init)
├── .gitignore           ← Filer som Git ska ignorera
├── README.md            ← Projektbeskrivning
├── github.html          ← Denna fil!
├── styles-github.css
├── script-github.js
│
├── <strong>1/</strong>                   ← Undermapp (DEL AV samma repository)
│   ├── index.html
│   ├── github1.html     ← Guide för undermapp
│   ├── README.md
│   └── ...
│
├── <strong>2/</strong>                   ← Undermapp (DEL AV samma repository)
│   ├── index.html
│   ├── README.md
│   └── ...
│
└── <strong>3/</strong>                   ← Undermapp (DEL AV samma repository)
    ├── index.html
    └── ...

<div style="margin-top: 15px; padding: 15px; background: #fff3cd; border-radius: 6px;">
    <strong>🔑 Nyckelpunkt:</strong><br>
    • <strong>EN</strong> .git/-mapp i roten (AI/)<br>
    • <strong>INGA</strong> .git/-mappar i undermapparna<br>
    • Alla undermappar (1, 2, 3...) är del av samma repository<br>
    • När du gör <code>git push</code> skickas ALLA undermappar till GitHub
</div>
    `;
    
    diagram.innerHTML = structure;
}

// ====================================
// FUNKTION: Kopiera kod
// ====================================
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;
    
    const text = codeElement.textContent;
    
    // Använd Clipboard API
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
// FUNKTION: Lägg till copy-feedback för alla knappar
// ====================================
function addCopyFeedback() {
    // Uppdatering: Lägg till händelsehanterare för alla copy-knappar
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hantering sker redan i copyCode()
        });
    });
}

// ====================================
// FUNKTION: Generera kommandon för ny undermapp (INTERAKTIV)
// ====================================
function generateFolderCommands() {
    const folderNumber = document.getElementById('folderNumber').value;
    const outputDiv = document.getElementById('generatedCommands');
    const codeElement = document.getElementById('generatedCode');
    
    if (!folderNumber || folderNumber < 1) {
        alert('Ange ett giltigt mappnummer (1 eller högre)');
        return;
    }
    
    // Generera kommandon baserat på input
    const commands = `# Skapa undermapp "${folderNumber}"
mkdir ${folderNumber}

# Gå in i mappen
cd ${folderNumber}

# Skapa grundfiler
New-Item -Path "index.html" -ItemType File
New-Item -Path "README.md" -ItemType File
New-Item -Path "styles.css" -ItemType File
New-Item -Path "script.js" -ItemType File

# Gå tillbaka till AI-mappen
cd ..

# Lägg till i Git
git add ${folderNumber}/
git commit -m "Skapa undermapp ${folderNumber} med grundfiler"

# Skicka till GitHub
git push

# Klart! Din nya undermapp "${folderNumber}" finns nu både lokalt och på GitHub.`;
    
    codeElement.textContent = commands;
    outputDiv.style.display = 'block';
    
    // Scrolla till resultatet
    outputDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================
// FUNKTION: Förklara Git-kommandon
// ====================================
function explainCommand(command) {
    const explanations = {
        status: {
            title: 'git status',
            description: 'Visar nuvarande status för ditt repository.',
            details: `
                <p><strong>Vad det visar:</strong></p>
                <ul>
                    <li>Vilka filer som ändrats (men inte lagts till)</li>
                    <li>Vilka filer som lagts till (staged) men inte committats</li>
                    <li>Vilka filer som inte spåras av Git</li>
                    <li>Om din branch är före/efter GitHub-versionen</li>
                </ul>
                <p><strong>Användning:</strong> Kör detta ofta för att se vad som händer!</p>
            `
        },
        add: {
            title: 'git add',
            description: 'Förbereder filer för commit (staging).',
            details: `
                <p><strong>Alternativ:</strong></p>
                <ul>
                    <li><code>git add filnamn.txt</code> - Lägg till specifik fil</li>
                    <li><code>git add .</code> - Lägg till alla ändrade filer i nuvarande mapp och undermappar</li>
                    <li><code>git add 2/</code> - Lägg till alla filer i undermapp "2"</li>
                </ul>
                <p><strong>Varför?</strong> Git kräver att du explicit säger vilka filer som ska ingå i nästa commit.</p>
            `
        },
        commit: {
            title: 'git commit',
            description: 'Sparar ändringar i lokal Git-historik.',
            details: `
                <p><strong>Syntax:</strong></p>
                <code>git commit -m "Beskrivning av ändring"</code>
                <p><strong>Tips för bra commit-meddelanden:</strong></p>
                <ul>
                    <li>Börja med verb: "Lägg till...", "Uppdatera...", "Fixa..."</li>
                    <li>Var specifik: "Fixa bugg i navigation" istället för "Fixar saker"</li>
                    <li>Skriv på svenska eller engelska - var konsekvent</li>
                </ul>
                <p><strong>OBS:</strong> Detta sparar bara lokalt, inte på GitHub ännu!</p>
            `
        },
        push: {
            title: 'git push',
            description: 'Skickar lokala commits till GitHub.',
            details: `
                <p><strong>Vad händer:</strong></p>
                <ol>
                    <li>Git jämför din lokala version med GitHub-versionen</li>
                    <li>Skickar alla nya commits till GitHub</li>
                    <li>Uppdaterar remote repository</li>
                </ol>
                <p><strong>Första gången:</strong></p>
                <code>git push -u origin main</code>
                <p><strong>Efter det:</strong></p>
                <code>git push</code>
                <p><strong>OBS:</strong> Du måste ha committade ändringar för att pusha!</p>
            `
        },
        pull: {
            title: 'git pull',
            description: 'Hämtar ändringar från GitHub till din lokala dator.',
            details: `
                <p><strong>När behövs detta?</strong></p>
                <ul>
                    <li>När du arbetar från flera datorer</li>
                    <li>När någon annan har gjort ändringar på GitHub</li>
                    <li>När du redigerat direkt på GitHub.com</li>
                </ul>
                <p><strong>Vad händer:</strong></p>
                <ol>
                    <li>Hämtar nya commits från GitHub</li>
                    <li>Slår samman (merge) med din lokala version</li>
                    <li>Uppdaterar dina filer</li>
                </ol>
                <p><strong>Tips:</strong> Kör <code>git pull</code> innan du börjar arbeta för att få senaste versionen!</p>
            `
        },
        log: {
            title: 'git log',
            description: 'Visar historik över commits.',
            details: `
                <p><strong>Användning:</strong></p>
                <code>git log</code> - Visa fullständig historik<br>
                <code>git log --oneline</code> - Kompakt vy (rekommenderas)<br>
                <code>git log --graph</code> - Visa branch-struktur
                <p><strong>Vad visas:</strong></p>
                <ul>
                    <li>Commit-ID (hash)</li>
                    <li>Författare</li>
                    <li>Datum</li>
                    <li>Commit-meddelande</li>
                </ul>
                <p><strong>Avsluta:</strong> Tryck <code>q</code> för att stänga log-vyn</p>
            `
        }
    };
    
    const info = explanations[command];
    if (!info) return;
    
    const explanationDiv = document.getElementById('commandExplanation');
    explanationDiv.innerHTML = `
        <h3>${info.title}</h3>
        <p><strong>${info.description}</strong></p>
        ${info.details}
    `;
    explanationDiv.style.display = 'block';
    
    // Scrolla till förklaringen
    explanationDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================
// FUNKTION: Modal (om behövs i framtiden)
// ====================================
function openModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Stäng modal om man klickar utanför
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// ====================================
// BONUS: Keyboard shortcuts
// ====================================
document.addEventListener('keydown', function(e) {
    // ESC stänger modal
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('✅ Alla funktioner laddade!');
