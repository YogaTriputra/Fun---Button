const btniya = document.querySelector(".btn-iya");
const btnkabur = document.querySelector(".btn-kabur");

btnkabur.addEventListener("mouseover", () => {

    // Hitung posisi acak (Math.random menghasilkan angka 0.0 sampai 1.0)
    // Kurangi 100 agar tidak terlalu mepet tepi layar
    const lebarLayar = window.innerWidth - 100;
    const tinggiLayar = window.innerHeight - 100;

    const posisiX = Math.random() * lebarLayar;
    const posisiY = Math.random() * tinggiLayar;

    // Terapkan posisi baru ke tombol
    btnkabur.style.position = 'absolute'; // Pastikan tombol bisa bergerak bebas
    btnkabur.style.left = posisiX + 'px'; // Pindah Kiri-Kanan
    btnkabur.style.top = posisiY + 'px';  // Pindah Atas-Bawah
});

// 3. Tambahkan fungsi saat tombol "Iya" diklik (Keberhasilan)
// 3. Tambahkan fungsi saat tombol "Iya" diklik (Keberhasilan)
btniya.addEventListener('click', function() {
    const img = document.querySelector("img");
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/775dfae9-f9b5-46c9-bcd8-62e7d40ba177/dg8idr3-46121b2a-2beb-4f64-9caa-0d046f39eac0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NzVkZmFlOS1mOWI1LTQ2YzktYmNkOC02MmU3ZDQwYmExNzcvZGc4aWRyMy00NjEyMWIyYS0yYmViLTRmNjQtOWNhYS0wZDA0NmYzOWVhYzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2UQBQP1s0fq_JRhybnoGbaJtZjAl6n_G-VE0OXRQpQ8";
    
    const text = document.querySelector("h1");
    text.innerHTML = "Selamat!"
    
    alert('akawoakqwoak.');

    // --- LOGIKA MENGUBAH TOMBOL "Nggaakk" JADI "Next" ---
    
    // 1. Clone tombol "Nggaakk" untuk menghapus event "kabur" (mouseover)
    const btnNext = btnkabur.cloneNode(true);
    
    // 2. Ganti teks dan style tombol baru
    btnNext.innerHTML = "Next";
    btnNext.style.position = "relative"; 
    btnNext.style.left = "0";
    btnNext.style.top = "0";
    btnNext.style.transform = "none";
    
    // 3. Ganti tombol lama dengan tombol baru di HTML
    btnkabur.parentNode.replaceChild(btnNext, btnkabur);
    
    // 4. Tambahkan fungsi klik baru untuk tombol "Next"
    btnNext.addEventListener('click', () => {
        alert("Lanjut ke part selanjutnya...");
       window.location.href = "slide.html";
    });
});