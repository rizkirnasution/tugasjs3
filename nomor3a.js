//Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

const cekBilPrima = (number) => {
    return new Promise((resolve, reject) => {
      if (typeof number === "number") {
        setTimeout(() => {
          let check = 0;
          for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                check++;
            }
          }
  
          if (check === 2) {
            resolve("Bilangan prima");
          } else {
            reject(new Error("Bukan Bilangan prima"));
          }
        }, 3000);
      } else {
        reject(new Error("Masukkan Number"));
      }
    })
    .then((result) => console.log(result))
    .catch(({ message }) => console.log(message));
  }
  
cekBilPrima(5);
cekBilPrima(4);
