// let NilaiAkhir = prompt(`Masukkan Nilai Akhir");

// if(NilaiAkhir >= 80 && NilaiAkhir <= 100){
//     document.write(`Nilai Akhir Anda A (${NilaiAkhir})`);
// }else if(NilaiAkhir >=70 && NilaiAkhir <=80){
//     document.write(`Niali Akhir Anda B (${NilaiAkhir})`);
// }else if (NilaiAkhir >= 60 && NilaiAkhir <= 70){
//     document.write(`Nilai Akhir Anda C(${NilaiAkhir})`);
// }else{
//     document.write(`Anda Belum Mengikuti Ujian`)
// }


// let userRole = prompt("Login Sebagai: ");

// if (userRole == "Admin" ) {
//     document.write("Selamat Datang Admin 🥰");
// }else if(userRole == "Operator"){
//     document.write("Selamat Datang Operator 😍")
// }else {
//     document.write("Anda Dilarang Mengakses Halaman Ini")
// }

let Team_A = 97.7
let Team_B = 96.4

if (Team_A > Team_B) {
    document.write(`Team A menang dengan rata-rata skor (${Team_A}) 🥇`);
} else if(Team_B > Team_A){
    document.write(`Team B menang dengan rata-rata skor (${Team_B})🥇 `);
}else {
    document.write(`pertandingan Seri`)
}