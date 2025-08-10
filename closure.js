let counter = 0;
for(let i = 0; i <5; i++){

    function print(){
        console.log(i + ' but counter is ' + counter++);
    }
    setTimeout(print, 0);
}