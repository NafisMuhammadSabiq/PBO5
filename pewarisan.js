class Orang {
    constructor(name, kelas) {
        this.name = name;
        this.kelas = kelas;
        this.lulusan = this.lulusan;
    }
    tampilkanMahasiswa() {
        console.log(`Nama: ${this.name}, Kelas: ${this.kelas}`);
    }
    tampilkanMaba() {
        console.log(`Nama: ${this.name}, alamat: ${this.alamat}`);
    }
}
// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(name, kelas, nim) {
        super(name, kelas); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanMahasiswa() {
        super.tampilkanMahasiswa(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
    }
}
// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Anwar", "IP231", "123456");
mahasiswa1.tampilkanMahasiswa();

// Definisi kelas turunan
class Maba extends Orang {
    constructor(name, lulusan, alamat) {
        super(name, lulusan); // Memanggil konstruktor kelas induk
        this.alamat = alamat;
    }

    tampilkanMaba() {
        super.tampilkanMaba(); // Memanggil metode dari kelas induk
        console.log(`Alamat: ${this.alamat}`);
    }
}
// Penggunaan kelas turunan
const maba1 = new Maba("Joni", "SMA 6 Bekasi", "Bekasi");
maba1.tampilkanMaba();