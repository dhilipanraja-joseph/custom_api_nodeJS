

function answer(ques){


    var ans = ["YES","NO","MAYBE"];



    var replay = /\?/.test(ques) ?  ans[Math.floor(Math.random()*3)] : 'Not a Question' ;

    // var replay = ;

    return  decodeURI(ques)+' : '+replay;

}

module.exports = answer;
