// first question
function is_array(arr) {
    return Array.isArray(arr)
}
console.log(is_array([1,2]))
// second question
function array_clone(arr) {
    var clone=arr.slice()
    return clone
}
console.log(array_clone([1,2]))
// third question
function first(arr,n=1) {
    var clone=arr.slice(0,n)
    return clone
}
console.log(first([],3))
// fourth question
function to_string(arr,n=1) {
    var clone=arr.join()
    var clone2=arr.join("+")
    console.log(clone,'\n',clone2)
}
console.log(to_string(['a','b']))
// fifth question
function frequency_counter(arr1) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
    {
            for (var j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                    m++;
                    if (mf<m)
                    {
                    mf=m; 
                    item = arr1[i];
                    }
            }
            m=0;
    }
    console.log(item+" ( " +mf +" times ) ") ;
}
frequency_counter(arr1)