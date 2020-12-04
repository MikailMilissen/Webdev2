// Object literals

    // Old
function getBook(title,author){
    return{
        title:title,
        autohor: author}}
var book = getBook ('Harry Potter', 'JK')
console.log(book)

    // ES6
    function getBook(title,author){
        return{
            title,
            author}}
    var book = getBook ('Harry Potter', 'JK')
    console.log(book)

// Object destruction