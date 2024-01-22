let BB_M = 60;
let TB_M = 1.6;
let BB_j = 64;
let TB_j = 1.65;

let Madan_IMT = BB_M/TB_M**2;
let Joan_IMT = BB_j/TB_j**2;


if (Madan_IMT > Joan_IMT) {
    console.log(`Nilai IMT Madan (${Math.round(Madan_IMT)}) lebih tinggi dari joan(${Math.round (Joan_IMT)})`)
} else {
    console.log(`Nilai IMT joan (${Math.round (Joan_IMT)}) lebih tinggi dari Madan (${Math.round(Madan_IMT)})`)
}