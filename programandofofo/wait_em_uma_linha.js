const wait = async(milissegundos) => Promise((resolve)=> setTimeout(resolve,milissegundos));

const teste =async() => {
    await wait(2000);
    console.log9("Esperou 2 segundos");

};

teste();