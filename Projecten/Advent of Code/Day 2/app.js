/* 6-8 s: svsssszslpsp
3-4 n: gncn
4-8 v: vkvmvdmvhttvvrgvvwv
16-18 j: jjjjjjjjjjjjjjjjjf
13-15 p: pppppppvppppxxppp
3-4 k: bkksggqbtwkkkzqcz
8-18 x: qxphxxtczxxxxxrbxxl
6-11 c: dccxcccccchrcfdckcsc
10-11 c: ccvxccccccccc
2-4 f: pszff
18-20 z: zzzzzzzzzzwzzzzzzzzj
1-7 g: ggggggpggggggg
3-5 h: hhhhfhh
2-5 x: dxxzxv
7-8 s: ssssssss
3-9 k: ktkkkkkklkck
3-4 n: gncn

var Passwords = {
    firstValue: 6,
    lastValue : 8,
    Value: 's',
    password: 'svsssszslpsp'
  }


function validPassword(lowNumber,highNumber,Value,Password){
    this.lowNumber = lowNumber;
    this.highNumber = highNumber;
    this.Value = Value;
    this.Password = Password
}
*/

Data[0].split('-')[1]

var Arr = [6,8,'s','svsssszslpsp']

var stringSearch = Arr[2]
var stringLiteral = Arr[3]

String.prototype.count=function(c) { 
  var result = 0;
  for(i=0;i<this.length;i++)if(this[i]==c)result++;
  return result;
};

console.log(Arr[3].count(Arr[2])); 

console.log(stringLiteral.split('s'))