let a = 'first';

function scopeTest() {
    console.log(a);

    if (a != '');
    console.log(a);

}

scopeTest();