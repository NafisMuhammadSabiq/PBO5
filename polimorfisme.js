class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang biasa");
    }
}
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
class Security extends Orang {
    tampilkanPeran() {
        console.log("Peran: Security");
    }
}
class WaliMurid extends Orang {
    tampilkanPeran() {
        console.log("Peran: Wali Murid");
    }
}
// Menggunakan polimorfisme
const orang1 = new Orang();
const siswa1 = new Siswa();
const guru1 = new Guru();
const security1 = new Security();
const waliMurid1 = new WaliMurid();
orang1.tampilkanPeran();    // Output: Peran: Orang biasa
siswa1.tampilkanPeran(); // Output: Peran: Siswa
guru1.tampilkanPeran();     // Output: Peran: Guru
security1.tampilkanPeran(); // Output: Peran: Security
waliMurid1.tampilkanPeran(); // Output: Peran: Wali Murid