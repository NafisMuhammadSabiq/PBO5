class Orang {
    constructor(name, kelas) {
        this.name = name;
        this.kelas = kelas;
    }

    tampilkanInformasi() {
        console.log(`Nama: ${this.name}, Kelas: ${this.kelas}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(name, kelas, nim) {
        super(name, kelas); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Anwar", "IP231", "123456");
mahasiswa1.tampilkanInformasi();