function setLanguage(lang) {
    
    document.body.classList.remove('lang-tr', 'lang-en');
    
    
    document.body.classList.add('lang-' + lang);
    
    
    sessionStorage.setItem('preferredLanguage', lang);
}


document.addEventListener('DOMContentLoaded', () => {
    
    const savedLanguage = sessionStorage.getItem('preferredLanguage');

    if (savedLanguage) {
        
        setLanguage(savedLanguage);
    } else {
        
        setLanguage('en');
    }
});