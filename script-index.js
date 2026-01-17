/* ===================================
   AI Projekt - Landningssida - JavaScript
   Skapat: 2026-01-17
   Innehåller interaktiva funktioner för landningssidan
   =================================== */

// ====================================
// Initialisering vid sidladdning
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AI Projekt Landningssida laddad');
    generateFolderTree();
    initScrollButton();
    showFolderInfo('root'); // Visa root-info som standard
});

// ====================================
// FUNKTION: Generera mappstruktur-visualisering
// ====================================
function generateFolderTree() {
    const tree = document.getElementById('folderTree');
    if (!tree) return;
    
    const structure = `
<strong style="color: #2563eb;">AI/</strong> (Repository-rot) 
├── 📄 .git/                      ← Git-databas
├── 📄 .gitignore                 ← Ignorerade filer
├── 📄 README.md                  ← Huvuddokumentation
├── 📄 index.html                 ← <strong>Denna sida!</strong>
├── 📄 styles-index.css           ← Stilmall för startsidan
├── 📄 script-index.js            ← JavaScript för startsidan
├── 📖 github.html                ← Git & GitHub Guide
├── 📄 styles-github.css          ← Stilmall för guiden
├── 📄 script-github.js           ← JavaScript för guiden
│
├── 📁 <strong style="color: #7c3aed;">1/</strong>                        ← Undermapp: Geoffrey Hinton
│   ├── 📄 index.html             ← Huvudpresentation
│   ├── 📄 README.md              ← Dokumentation för mapp 1
│   ├── 📖 github1.html           ← Git-guide för undermapp
│   ├── 📄 styles-github1.css    ← Stilmall
│   └── 📄 script-github1.js     ← JavaScript
│
├── 📁 <strong style="color: #f59e0b;">2/</strong>                        ← Undermapp: Kommande projekt
│   └── 📄 index.html (tom)
│
└── 📁 <strong style="color: #f59e0b;">3/</strong>                        ← Undermapp: Kommande projekt
    └── ...

<div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #2563eb;">
    <strong>💡 Viktigt:</strong><br>
    • ETT Git repository för hela projektet (AI/)<br>
    • Undermapparna (1, 2, 3...) är del av samma repository<br>
    • Varje nivå har sin egen README och dokumentation<br>
    • Separata HTML, CSS och JS-filer för varje sida
</div>
    `;
    
    tree.innerHTML = structure;
}

// ====================================
// FUNKTION: Visa mappinformation (Interaktiv mappnavigator)
// ====================================
function showFolderInfo(folder) {
    const infoDiv = document.getElementById('folderInfo');
    if (!infoDiv) return;
    
    // Definiera information för varje mapp
    const folderData = {
        root: {
            title: '📂 AI/ - Repository-rot',
            description: 'Huvudmappen för hela projektet. Innehåller alla undermappar och grundläggande filer.',
            files: [
                { name: 'README.md', desc: 'Huvuddokumentation för projektet', link: 'README.md' },
                { name: 'index.html', desc: 'Denna landningssida', link: '#' },
                { name: 'github.html', desc: 'Git & GitHub Guide', link: 'github.html' },
                { name: '.gitignore', desc: 'Filer som Git ignorerar', link: null }
            ],
            links: [
                { text: '📖 Läs README', url: 'README.md' },
                { text: '📚 Git Guide', url: 'github.html' },
                { text: '🌐 GitHub Repo', url: 'https://github.com/kentlundgren/AI', external: true }
            ]
        },
        '1': {
            title: '📁 1/ - Geoffrey Hinton-projektet',
            description: 'En interaktiv presentation om Geoffrey Hintons 10 viktigaste bidrag till AI. Tvåspråkig med visuella illustrationer.',
            files: [
                { name: 'index.html', desc: 'Huvudpresentationen', link: '1/index.html' },
                { name: 'README.md', desc: 'Dokumentation för projektet', link: '1/README.md' },
                { name: 'github1.html', desc: 'Git-guide för undermappar', link: '1/github1.html' }
            ],
            links: [
                { text: '🚀 Live Demo', url: 'https://kentlundgren.github.io/AI/1/', external: true },
                { text: '📖 README', url: '1/README.md' },
                { text: '📚 Undermapp-guide', url: '1/github1.html' }
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Tvåspråkig'],
            features: ['Interaktiv bildspel', 'Svenska/Engelska', 'Responsiv design', 'Externa bilder']
        },
        '2': {
            title: '📁 2/ - Kommande projekt',
            description: 'Nästa spännande AI-demonstration eller guide kommer snart! Denna mapp är reserverad för framtida innehåll.',
            files: [
                { name: 'index.html', desc: 'Ännu ej skapad', link: null }
            ],
            links: [],
            status: '🚧 Under planering'
        },
        '3': {
            title: '📁 3/ - Kommande projekt',
            description: 'Ytterligare ett projekt på väg! Detta repository växer kontinuerligt med nya exempel och demonstrationer.',
            files: [
                { name: '...', desc: 'Ännu ej skapat', link: null }
            ],
            links: [],
            status: '🚧 Under planering'
        }
    };
    
    const data = folderData[folder];
    if (!data) return;
    
    // Bygg HTML
    let html = `
        <h3>${data.title}</h3>
        <p style="font-size: 1.1rem; margin: 15px 0; color: var(--text-secondary);">${data.description}</p>
    `;
    
    // Status (för kommande projekt)
    if (data.status) {
        html += `
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                <strong>${data.status}</strong>
            </div>
        `;
    }
    
    // Filer
    if (data.files && data.files.length > 0) {
        html += `
            <div style="margin: 25px 0;">
                <h4 style="margin-bottom: 15px;">📄 Filer i denna mapp:</h4>
                <ul style="list-style: none; padding: 0;">
        `;
        
        data.files.forEach(file => {
            if (file.link) {
                html += `<li style="margin: 10px 0;">
                    <a href="${file.link}" style="color: #2563eb; text-decoration: none; font-weight: 600;">
                        ${file.name}
                    </a> - ${file.desc}
                </li>`;
            } else {
                html += `<li style="margin: 10px 0; color: #94a3b8;">
                    ${file.name} - ${file.desc}
                </li>`;
            }
        });
        
        html += `</ul></div>`;
    }
    
    // Teknologier
    if (data.tech) {
        html += `
            <div style="margin: 25px 0;">
                <h4 style="margin-bottom: 15px;">⚙️ Teknologier:</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        `;
        
        data.tech.forEach(tech => {
            html += `<span style="background: #2563eb; color: white; padding: 6px 14px; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">${tech}</span>`;
        });
        
        html += `</div></div>`;
    }
    
    // Features
    if (data.features) {
        html += `
            <div style="margin: 25px 0;">
                <h4 style="margin-bottom: 15px;">✨ Funktioner:</h4>
                <ul style="margin-left: 20px; color: var(--text-secondary);">
        `;
        
        data.features.forEach(feature => {
            html += `<li style="margin: 8px 0;">${feature}</li>`;
        });
        
        html += `</ul></div>`;
    }
    
    // Länkar
    if (data.links && data.links.length > 0) {
        html += `
            <div style="margin-top: 30px; display: flex; gap: 12px; flex-wrap: wrap;">
        `;
        
        data.links.forEach(link => {
            const target = link.external ? 'target="_blank"' : '';
            html += `
                <a href="${link.url}" ${target} 
                   style="padding: 12px 20px; background: #2563eb; color: white; text-decoration: none; 
                          border-radius: 8px; font-weight: 600; transition: all 0.3s ease;">
                    ${link.text}
                </a>
            `;
        });
        
        html += `</div>`;
    }
    
    // Visa information
    infoDiv.innerHTML = html;
    infoDiv.classList.add('active');
    
    // Scrolla till information
    infoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================
// FUNKTION: Scroll to top button
// ====================================
function initScrollButton() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
    
    // Visa/dölj knapp baserat på scroll-position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ====================================
// FUNKTION: Smooth scrolling för ankarlänkar
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorera # utan id
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// BONUS: Intersection Observer för animationer
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observera projekt-kort för fade-in effekt
document.querySelectorAll('.project-card, .guide-card, .tech-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

console.log('✅ Alla funktioner laddade och redo!');
