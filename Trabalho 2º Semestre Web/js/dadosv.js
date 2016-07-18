    $(function(){
    $.getJSON("js/Dd.json",
    function(data){
    var x=data.box1.length;
        for(i=0;i<x;i++){
$("#Box1").append("<br/>"+"<br/>"+data.box1[i].nome+"<br/>"+"<br/>"+data.box1[i].departamento+"<br/>");
       
        }
        
    var x=data.box2.length;
        for(i=0;i<x;i++){
$("#Box2").append("<br/>"+"<br/>"+data.box2[i].nome+"<br/>"+"<br/>"+data.box2[i].departamento+"<br/>");}
           
    var x=data.box3.length;
        for(i=0;i<x;i++){
$("#Box3").append("<br/>"+"<br/>"+data.box3[i].nome+"<br/>"+"<br/>"+data.box3[i].departamento+"<br/>");}
        
    var x=data.box4.length;
        for(i=0;i<x;i++){ 
$("#Box4").append("<br/>"+"<br/>"+data.box4[i].nome+"<br/>"+"<br/>"+data.box4[i].departamento+"<br/>");}
        
    var x=data.box5.length;
        for(i=0;i<x;i++){
$("#Box5").append("<br/>"+"<br/>"+data.box5[i].nome+"<br/>"+"<br/>"+data.box5[i].departamento+"<br/>");}
        
    var x=data.box6.length;
        for(i=0;i<x;i++){
$("#Box6").append("<br/>"+"<br/>"+data.box6[i].nome+"<br/>"+"<br/>"+data.box6[i].departamento+"<br/>");}
        
    var x=data.box7.length;
        for(i=0;i<x;i++){
$("#Box7").append("<br/>"+"<br/>"+data.box7[i].nome+"<br/>"+"<br/>"+data.box7[i].departamento+"<br/>");}
        
    var x=data.box8.length;
        for(i=0;i<x;i++){
$("#Box8").append("<br/>"+"<br/>"+data.box8[i].nome+"<br/>"+"<br/>"+data.box8[i].departamento+"<br/>");}
        
    var x=data.box9.length;
        for(i=0;i<x;i++){
$("#Box9").append("<br/>"+"<br/>"+data.box9[i].nome+"<br/>"+"<br/>"+data.box9[i].departamento+"<br/>");}
        
    var x=data.box10.length;
        for(i=0;i<x;i++){
$("#Box10").append("<br/>"+"<br/>"+data.box10[i].nome+"<br/>"+"<br/>"+data.box10[i].departamento+"<br/>");}
    }
    )
    });
