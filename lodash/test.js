function chunk(arr,n){
    n= Math.max(toInteger(size), 0);
    if(arr.length<1||arr.length<n){
        return arr;
    }else{ 
        var arrb=arr.splice(0,n);
        var arrc=arr;
        console.log(index,arrb,arrc);
    }
}
chunk([1,2,3,4,5,1,2,3,0],3);