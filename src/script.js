function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('btn-signin').addEventListener('click', () => showScreen('login-screen'));
document.getElementById('btn-signup').addEventListener('click', () => showScreen('login-screen'));
document.getElementById('link-back-welcome').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-login').addEventListener('click', () => showScreen('dashboard-screen'));
document.getElementById('link-logout').addEventListener('click', () => showScreen('welcome-screen'));
