const assert = require('chai').assert;
const factorial = require('../factorial');

describe('Finding Factorial of a number n', ()=>{

    // test last with 0 ==>Green!
    it('factorial of 0!', ()=>{
        assert.equal(factorial(0),1);
    })

    it('factorial of 1!', ()=>{
        assert.equal(factorial(1),1);
    })

    it('factorial of 2!', ()=>{
        // assert.equal(factorial(1),2);
        // refactoring to give green
        assert.equal(factorial(2),2);
    })
    
    it('factorial of 3!', ()=>{
        assert.equal(factorial(3),6);
    })
    it('factorial of 4!', ()=>{
        assert.equal(factorial(4),24);
    })


    it('factorial of 5!', ()=>{
        assert.equal(factorial(5),120);
    })


})