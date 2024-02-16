// 1.
class Banca {
  constructor(nume, codSWIFT, taraOrigine) {
    this.nume = nume;
    this.codSWIFT = codSWIFT;
    this.taraOrigine = taraOrigine;
    this.conturi = [];
  }

  creazaCont(nrCont, soldInitial) {
    const cont = {
      nrCont: nrCont,
      sold: soldInitial,
    };
    this.conturi.push(cont);
    console.log(`Contul ${nrCont} a fost creat cu succes.`);
  }

  afiseazaConturiDeschise() {
    console.log(`Conturile deschise la banca ${this.nume}:`);
    this.conturi.forEach((cont) => {
      console.log(`Nr. Cont: ${cont.nrCont}, Sold: ${cont.sold}`);
    });
  }

  afiseazaConturiCuSoldNegativ() {
    console.log(`Conturile cu sold negativ la banca ${this.nume}:`);
    this.conturi.forEach((cont) => {
      if (cont.sold < 0) {
        console.log(`Nr. Cont: ${cont.nrCont}, Sold: ${cont.sold}`);
      }
    });
  }
}

const bcr = new Banca("bcr", "QWEWR234", "Romania");

bcr.creazaCont("1241209412", 1000);
bcr.creazaCont("5294812814", -500);
bcr.creazaCont("9867162541", 2000);

bcr.afiseazaConturiDeschise();
bcr.afiseazaConturiCuSoldNegativ();

// 2.
// function ContBancar(numarCont, id, sold, numeDetinator) {
//   this.numarCont = numarCont;
//   this.id = id;
//   this.sold = sold;
//   this.numeDetinator = numeDetinator;
// }

// function adaugaContInBanca(banca, cont) {
//   banca.conturi.push(cont);
// }

// let cont1 = new ContBancar("RO101927495", 2, 2000, "Bibica Gabriel");

// let banca = {
//   nume: "BCR",
//   conturi: [],
// };

// adaugaContInBanca(banca, cont1);

// console.log("Nume banca: " + banca.nume);
// console.log("Conturi in banca: ");

// console.log("Nume banca: " + banca.nume);
// console.log("Conturi in banca: ");
// for (let i = 0; i < banca.conturi.length; i++) {
//   console.log(
//     "Numar cont: " +
//       banca.conturi[i].numarCont +
//       ", ID: " +
//       banca.conturi[i].id +
//       ", Sold: " +
//       banca.conturi[i].sold +
//       ", Nume detinator: " +
//       banca.conturi[i].numeDetinator
//   );
// }

// 3.
function ContBancar(numarCont, id, sold, numeDetinator) {
  this.numarCont = numarCont;
  this.id = id;
  this.sold = sold;
  this.numeDetinator = numeDetinator;
}

ContBancar.prototype.achitaSuma = function (suma) {
  if (suma > 0 && suma <= this.sold) {
    this.sold -= suma;
    console.log("Achitare reușită! Sold curent: " + this.sold);
  } else {
    console.log("Achitare eșuată. Fonduri insuficiente.");
  }
};

function adaugaContInBanca(banca, cont) {
  banca.conturi.push(cont);
}

let cont1 = new ContBancar("RO101927495", 2, 2000, "Bibica Gabriel");

let banca = {
  nume: "BCR",
  conturi: [],
};

adaugaContInBanca(banca, cont1);

console.log("Nume banca: " + banca.nume);
console.log("Conturi in banca: ");
for (let i = 0; i < banca.conturi.length; i++) {
  console.log(
    "Numar cont: " +
      banca.conturi[i].numarCont +
      ", ID: " +
      banca.conturi[i].id +
      ", Sold: " +
      banca.conturi[i].sold +
      ", Nume detinator: " +
      banca.conturi[i].numeDetinator
  );
}

cont1.achitaSuma(700);
