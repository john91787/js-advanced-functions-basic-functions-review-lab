// Your code here
function saturdayFun (activity="roller-skate"){
        return `This Saturday, I want to ${activity}!`
    }

function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style=`*`){
    return function (result=`a hard worker`){
    return `You are ${style}${result}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(c,d){
        return c-d;
    },
    multiply:function(e,f){
        return e*f;
    },
    divide:function(g,h){
        return g/h;
    }
}

function actionApplyer(start, array){
    let a = start
    for(let i=0; i<array.length; i++ ){
        a=array[i](a)
    }
    return a
}
