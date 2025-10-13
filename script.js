document.addEventListener('DOMContentLoaded', () => {
    const tombolKejutan = document.getElementById('tombol-kejutan');
    const judulUcapan = document.getElementById('judul-ucapan');
    const pesanUtama = document.getElementById('pesan-utama');

    // Mengaktifkan confetti saat halaman dimuat
    // Fungsi bawaan dari library canvas-confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Menambahkan event listener ke tombol kejutan
    tombolKejutan.addEventListener('click', () => {
        // Efek Confetti tambahan saat tombol diklik
        confetti({
            particleCount: 200,
            spread: 180,
            origin: { y: 0.5 }
        });

        // Perubahan pesan setelah kejutan
        judulUcapan.textContent = "SWEET 17 CANTII! 🥳";
        pesanUtama.innerHTML = "Semoga semua cita citamu akan menjadi kenyataan! enjoy ur life. just a 'lil surprise for u! ✨";
        tombolKejutan.textContent = "🥳 CHEERRSS! 🥳";
        tombolKejutan.style.backgroundColor = '#f44336'; // Ganti warna tombol

        // Nonaktifkan tombol setelah diklik (opsional)
        tombolKejutan.disabled = true;
    });

    // Anda bisa menambahkan logika tambahan di sini, misalnya menghitung umur, dll.
});
