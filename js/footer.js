// ===== Dynamic Footer Component =====
function renderFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="logo">Andrea Festi</a>
                    <p data-i18n="footer.tagline">Excel & VBA Automation Specialist</p>
                </div>
                <div class="footer-social">
                    <a href="mailto:festi.andrea@gmail.com" class="social-icon" title="Email">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/andreafesti/" target="_blank" rel="noopener" class="social-icon" title="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://it.fiverr.com/andrea_festi" target="_blank" rel="noopener" class="social-icon" title="Fiverr">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.878-.476l1.435.527c-.351.769-1.094 1.238-2.313 1.238-1.73 0-2.632-1.15-2.632-2.515 0-1.36.902-2.515 2.545-2.515 1.56 0 2.44 1.15 2.44 2.515v.368zm-1.464-.967c-.088-.527-.4-.81-.976-.81-.556 0-.878.283-.976.81h1.952zm-4.835-.534h-.85c-.545 0-.84.41-.84 1.092v2.466H5.623v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466H2.488v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.528v1.316zM0 15.588h1.666V10.68H0v4.908zM.833 9.691a.907.907 0 0 0 .001-1.814.907.907 0 0 0-.001 1.814z"/></svg>
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Andrea Festi. <span data-i18n="footer.rights">All rights reserved.</span></p>
            </div>
        </div>
    </footer>`;
    
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}

// Render footer immediately when script runs (synchronous)
renderFooter();
