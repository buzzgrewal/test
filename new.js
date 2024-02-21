var obj={firsr:"first",second:"second"};
var obj2={third:"third",fourth:"fourth"};
//change the value of the object
obj.firsr="first1";
var obj3=Object.assign(obj,obj2);
console.log(obj3);