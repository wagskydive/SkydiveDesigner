function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('btn-signin').addEventListener('click', () => showScreen('login-screen'));
document.getElementById('btn-signup').addEventListener('click', () => showScreen('login-screen'));
document.getElementById('btn-demo').addEventListener('click', () => showScreen('dashboard-screen'));
document.getElementById('link-back-welcome').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-login').addEventListener('click', () => showScreen('dashboard-screen'));
document.getElementById('link-logout').addEventListener('click', () => showScreen('welcome-screen'));

document.getElementById('btn-create').addEventListener('click', () => showScreen('jump-design-screen'));
document.getElementById('btn-save-jump').addEventListener('click', () => showScreen('dashboard-screen'));
document.getElementById('link-back-dashboard').addEventListener('click', () => showScreen('dashboard-screen'));

document.getElementById('btn-view-jump').addEventListener('click', () => showScreen('jump-detail-screen'));
document.getElementById('btn-edit-jump').addEventListener('click', () => showScreen('jump-design-screen'));
document.getElementById('link-back-dashboard2').addEventListener('click', () => showScreen('dashboard-screen'));

document.getElementById('link-profile').addEventListener('click', () => showScreen('profile-screen'));
document.getElementById('link-back-dashboard3').addEventListener('click', () => showScreen('dashboard-screen'));
