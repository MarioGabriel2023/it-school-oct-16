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
