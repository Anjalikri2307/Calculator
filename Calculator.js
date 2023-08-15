document.getElementById('answer').value="";
let StartCalculator={

OpFlag:false, 
//first Number
first:function(x){
  this.a= this. a ? this.a + x : x;
},
//2nd Number 
Second:function(x){
  this.b=this.b? this.b + x : x;
},

op:function(x){
this.opertor=x;   
},
calculate:function(){

    switch (this.opertor){
    case"+":
    return parseFloat( this.a) + parseFloat( this.b);
    case"-":
    return parseFloat( this.a) - parseFloat( this.b);
    case"/":
    return parseFloat( this.a) / parseFloat( this.b);
    case"*":
    return parseFloat( this.a) * parseFloat( this.b);
  
    }
},

result:function(){

 let result = this.calculate();
 document.getElementById('answer').value=result;  

}
};

function check(val){
    if(Number(val) || val =="."){
         
        if(StartCalculator.OpFlag)
         StartCalculator.Second(val);
        else
        StartCalculator.first(val);
    }
     else{
        if( val == "="){
            return StartCalculator.result();
        }
          else if(val!= "."){
          StartCalculator.OpFlag=true;
          StartCalculator.op(val);
        }
     } 

      let display=document.getElementById('answer');
      let display_value = display.value;
      display.value=display_value + val;  
}
