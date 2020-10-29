let hamburger = {
    broodje: ['sesam', 'tarwe'],
    saus:['curry', 'mayo'],
    groenten:['sla', 'tomaat'],
    extra:['bacon','kaas'],

    bestellen:function (){
        console.log(`Kan ik een burger krijgen met ${this.saus[1]} ${this.broodje} en zonder ${this.extra} alstublieft.`)
    }
}

hamburger.bestellen()