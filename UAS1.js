// Simpan data transaksi di array
let transaksi = [];

// Fungsi tambah transaksi
function tambahTransaksi(jenis, jumlah) {
    const tanggal = new Date().toISOString().split('T')[0];
    transaksi.push({ tanggal, jenis, jumlah });
    tampilkanRiwayat();
}

// Fungsi tampilkan riwayat transaksi
function tampilkanRiwayat() {
    const riwayatTransaksi = document.getElementById('riwayat-transaksi');
    riwayatTransaksi.innerHTML = '';
    transaksi.forEach((transaksi) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaksi.tanggal}</td>
            <td>${transaksi.jenis}</td>
            <td>${transaksi.jumlah}</td>
        `;
        riwayatTransaksi.appendChild(row);
    });
}

// Event listener untuk tombol simpan dan pinjam
document.addEventListener('DOMContentLoaded', () => {
    const simpanButton = document.querySelector('#simpan button');
    const pinjamButton = document.querySelector('#pinjam button');

    simpanButton.addEventListener('click', (e) => {
        e.preventDefault();
        const jumlahSimpan = document.getElementById('jumlah_simpan').value;
        tambahTransaksi('Simpan', jumlahSimpan);
    });

    pinjamButton.addEventListener('click', (e) => {
        e.preventDefault();
        const jumlahPinjam = document.getElementById('jumlah_pinjam').value;
        tambahTransaksi('Pinjam', jumlahPinjam);
    });
});