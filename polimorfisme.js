// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang biasa");
    }
}

// Definisi kelas turunan
class Siswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Siswa");
    }
}

class Guru extends Orang {
    tampilkanPeran() {
        console.log("Peran: Guru");
    }
}

// Menggunakan polimorfisme
const orang1 = new Orang();
const siswa1 = new Siswa();
const guru1 = new Guru();

orang1.tampilkanPeran();    // Output: Peran: Orang biasa
siswa1.tampilkanPeran(); // Output: Peran: Siswa
guru1.tampilkanPeran();     // Output: Peran: Guru