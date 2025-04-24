function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector('.tab[onclick="switchTab(\'' + tabId + '\')"]').classList.add('active');
  }