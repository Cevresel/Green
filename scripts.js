// Hamburger menüsünü açma ve kapama fonksiyonu
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

// Hazırlayanlar bölümü
function showAbout() {
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('info-section').style.display = 'none';
}

// Nedir? bölümü
function showInfo() {
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('info-section').style.display = 'block';
}

// Veri giriş formu işlemi
document.getElementById('data-entry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal submit işlemini engelle

    // Kullanıcıdan alınan veri
    const inputData = document.getElementById('inputData').value;

    // Eğer veri varsa, localStorage'a kaydet
    if (inputData) {
        let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        data.push(inputData); // Yeni veriyi mevcut verilere ekle
        localStorage.setItem('data', JSON.stringify(data));

        // Kullanıcıya başarılı mesajı göster
        document.getElementById('message').textContent = 'Veri başarıyla eklendi!';

        // Veriyi ekranda göster
        displayData();
        
        // Formu sıfırla
        document.getElementById('data-entry-form').reset();
    } else {
        document.getElementById('message').textContent = 'Lütfen veri girin.';
    }
});

// Verileri ekranda göster
function displayData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    let output = '<ul>';
    data.forEach(item => {
        output += `<li>${item}</li>`;
    });
    output += '</ul>';
    document.getElementById('data-output').innerHTML = output;
}

// Sayfa yüklendiğinde, verileri ekranda göster
window.onload = function() {
    displayData();
};
