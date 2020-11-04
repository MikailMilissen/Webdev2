const result = [0, 1, 2, 3];
document.getElementById("div1").innerText = (result);

const items = [{
        id: '',
        name: 'SuperBurger',
        price: 399
    },
    {
        id: '',
        name: 'JumboFries',
        price: 199
    },
    {
        id: '',
        name: "BigSlurp",
        price: 299
    }
];
// document.getElementById("div4").innerText=(items);
//dit werkt beter met for EAch:

// const app=document.querySelectorAll('div2');
items.forEach(item => {
    div2.innerHTML +=
        `<li>
    ${item.id}${item.name}-${(item.price/100).toFixed(2)}
    </li>`
})

//hetzelfde for loop:
for (let i = 0; i < items.length; i++) {
    document.getElementById("div3").innerHTML = (items[i].name);
    //dit werkt niet
};
//Teds oplossing met for loop: gebruik backticks

// items.forEach(item=> is hetzelfde als 
// for (i=0;i<items.length;i++)

for (let i = 0; i < items.length; i++) {
    const item = items[i]; //dit werkt 
    div4.innerHTML +=
        `<li>
    ${item.id}${item.name}-${(item.price/100).toFixed(2)}
    </li>`
};

//items[i] enz werkt ook
for (let i = 0; i < items.length; i++) {
    div5.innerHTML +=
        `<li>
    ${items[i].id}${items[i].name}-${(items[i].price/100).toFixed(2)}
    </li>`
};

const halfOfFries = items.map(item => {
    if (item.id === '') {
        return {
            ...item,
            price: item.price / 2
        };
    }
    return item;
});

console.log(halfOfFries)
//parameters in map zijn : value, index, array
const testje = items.map((freddy, ivan) => freddy.price / 2 * ivan);
console.log(testje);

const helftvandefrieten = [];
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.id === '') {
        helftvandefrieten.push({
            ...item,
            price: item.price / 2
        });
    } else {
        helftvandefrieten.push(item);
    }
}
console.log(helftvandefrieten)

const duurfrieten = items
    .filter(friet => friet.price > 200)
console.log(duurfrieten);

const megaduurfrieten = [];
for (let jj = 0; jj < items.length; jj++) {
    const ielduurfriet = items[jj];
    if (ielduurfriet.price > 250) {
        megaduurfrieten.push(ielduurfriet)
    }
}
console.log(megaduurfrieten)

const totaalpraas = items.reduce((acc, val) => acc + val.price)
console.log(totaalpraas) //not ok

const duurFrieten = {
    taap: "klentje",
    praas: 25,
    BTW: 1.21,
    sauws: "kuurriesketsjup",
    muuntienhaat: "euro",
    zegdieswamoedemme: function () {
        console.log(
            `veur maa een ${this.taap} me ${this.sauws} en rap een bikke!!!
       `
        )
    },
    dakostanzeuveel: function () {
        console.log(
            `OK. dat kost tan ${this.praas} ${this.muuntienhaat}, metten BeeTeeWee derbaa komt dat oep slechts ${this.praas*this.BTW}. moetter zouwt op aa frietjes? da was toch ee ${this.taap} me ${this.sauws} ee????????
`
        )

    },
    waaaddaaa: function (x) {
        console.log("gaa zaa nen echten" + x)
        console.log(this.praas * this.BTW + ",  met de bTW derbaa, normool kost da " + this.praas / 5 + "!!!!!!!!!!! " + this.muuntienhaat + " dakannaatochnie!?")

    }
}

duurFrieten.zegdieswamoedemme();
duurFrieten.dakostanzeuveel();
duurFrieten.waaaddaaa(" afzetter!! "); //parameter doorgeven 


const kemOnger = ["satee", "klentje", "tartaar"];
let bestellenMaar = function () {
    console.log("veur maa een " + kemOnger[1] + " me " + kemOnger[2] + " en oewk nog een " + kemOnger[0])
};
bestellenMaar();

let nogMeer = [];
const frietShower = function () {
    for (let i = 0; i < nogMeer.length; i++) {
        console.log(nogMeer[i])
    }
};

nogMeer = ["satee", "klentje", "currywurst", "frieten met mayonnaise en stoofvleessaus", "viandel", "bicky burger"];

const gasten = ["Freddy", "Marrek", "Gaston", "Ronny", "Eddy", "Tony"];
const dames = ["Eulalie", "Eufrazie", "Germaine", "Gertrude", "Francine", "Geraldine"];
frietShower();
const dranklijst = ["J&B on the rocks", "campari", "plat water", "Jupiler", "Duvel", "Westmalle Tripel"]

function frietShower2(x) {
    console.log("joa doe veur maa mor een " + x)
};
nogMeer.forEach(element => frietShower2(element));

for (johnny = 0; johnny < nogMeer.length; johnny++) {
    console.log(gasten[johnny] + " pakt een " + nogMeer[johnny])
}

let total = 1;


for (gino = 0; gino < gasten.length; gino++) {
    for (ginette = 0; ginette < dames.length; ginette++) {
        for (gina = 0; gina < nogMeer.length; gina++) {
            for (guido = 0; guido < dranklijst.length; guido++) {
                console.log("=====================================================================================")
                console.log("iteratienummer: " + total++);
                console.log(`
    A-loop: ${gino+1}
        B-loop: ${ginette+1}
            C-loop: ${gina+1} 
                D-loop: ${guido+1} `);
                console.log(dames[ginette] + " zit naast " + gasten[gino] + " en ze eten beiden een " + nogMeer[gina] + " met een glazeke " + dranklijst[guido])


            }
        }
    }
}