function main(par1, par2, call) {
    console.log(par1, par2);

    call();
}

function tescallback() {
    console.log("hello saya callback");
}

main(1, 2, tescallback);