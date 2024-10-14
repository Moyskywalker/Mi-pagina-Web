const emailButton = document.getElementById('copy')
emailButton.addEventListener('click', ()=>{ 
    const emailAddress ='mvidalfelix@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML='Copied!'
})