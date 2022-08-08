const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item.toLowerCase() === day.toLowerCase();
        });
  
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  };
  
  // then-catch
  cekHariKerja("senin")
    .then((result) => console.log(`${result} adalah hari kerja`))
    .catch((error) => console.log(error.message));
  
  // try-catch
  const cekHari = async (day) => {
    try {
      console.log(await cekHariKerja(day));
    } catch (error) {
      console.log(error.message);
    }
  };
  cekHari("minggu");
  cekHari("senin");