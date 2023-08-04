const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'));                  //operador ternario consta de 3 partes: condición ? expresión1 : expresión2;
    });
};

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
};

console.log("Before");
anotherFn();
console.log("After");

