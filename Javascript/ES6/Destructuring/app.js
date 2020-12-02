// mission

const metaInfo = {
    title: 'INTECBRUSSEL',
    courses:{
        javascript: 10,
        java:20,
        csharp:10
    },
    contacts:{
        Bart:"bart@intecbrussel.be",
        Atilla:"atilla@intecbrussel.be"
    },
    location:['Rouppeplein','Brussel','Delta']
}

    // Extract it with normal property

const { title, courses:{ javascript:course1, java, csharp }, contacts:{ Bart, Atilla},location:[l1,l2]} = metaInfo;

console.log(title,course1,Bart);

const [straat,stad] = metaInfo.location

console.log(straat)

    // Extract it with changing the words to nederlands

const {title:titel,courses:opleidingen,contacts:contacten,location:locatie} = metaInfo;

console.log(titel,opleidingen,contacten)

