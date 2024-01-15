let BB_M = 60;
let TB_M = 1.6;
let BB_j = 64;
let TB_j = 1.65;

let Madan_IMT = BB_M/TB_M**2;
let Joan_IMT = BB_j/TB_j**2;
let MadanHigherIMT = Madan_IMT > Joan_IMT ; 

console.log(`
    Perhitungan Timbangan IMT 

    Berat Badan Madan : ${BB_M}
    Tinggi Badan Madan : ${TB_M}
    Timbangan IMT Madan : ${Madan_IMT}
    
    Berat Badan Joan : ${BB_j}
    Tinggi Badan Joan : ${TB_j}
    Timbangan IMT Joan : ${Joan_IMT}
    
    Hasil Perbandingan Antara keduanya : ${MadanHigherIMT}`)