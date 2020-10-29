const duurFrieten= {
    taap:"klentje",
    praas: 25,
    BTW:1.21,
    sauws: "kuurriesketsjup",
    muuntienhaat: "euro",
    zegdieswamoedemme:function(){
    console.log(`veur maa een ${this.taap} me ${this.sauws} en rap een bikke!!!`) 
    } ,
    dakostanzeuveel: function(){
    console.log(`OK. dat kost tan ${this.praas} ${this.muuntienhaat}, metten BeeTeeWee derbaa komt dat oep slechts ${this.praas*this.BTW}. moetter zouwt op aa frietjes? da was toch ee ${this.taap} me ${this.sauws} ee????????`
    )
    },
    waaaddaaa: function(x){
    console.log("gaa zaa nen echten" + x )
    console.log(this.praas*this.BTW +", met de bTW derbaa, normool kost da " + this.praas/5 +"!!!!!!!!!!! "+ this.muuntienhaat +" dakannaatochnie!?")
    
    }
   }
   //functies aanroepen:
   duurFrieten.zegdieswamoedemme();
   duurFrieten.dakostanzeuveel();
   duurFrieten.waaaddaaa(" afzetter!! ");//parameter doorgeven