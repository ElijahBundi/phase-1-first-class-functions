function receivesAFunction(callback) {
    return callback(function() {console.log('Wow! Let\'s go')})
}

function returnsANamedFunction() {
    let spy = () => console.log('I see you')
    return spy
}

function returnsAnAnonymousFunction() {
    return function() {}
}
