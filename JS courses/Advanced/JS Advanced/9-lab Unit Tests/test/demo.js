function sum(a,b){
    return a+b
}


describe('main test', function(){
    it('works', function(){
        if(sum(3,5) !==8){
            throw new Error('problem')
        }
    })
})