$(function(){
  $("#btn").click(gravarDados);
  $("#btn1").click(carregarDados);
});

function gravarDados(){
var x=parseInt($("#a").val());
x++; 

	localStorage.setItem("a",$("#a").val());
	localStorage.setItem("b",$("#b").val());
	localStorage.setItem("c",$("#c").val());
	localStorage.setItem("d",$("#d").val());
	localStorage.setItem("e",$("#e").val());
	localStorage.setItem("f",$("#f").val());
	localStorage.setItem("g",$("#g").val());
	localStorage.setItem("h",$("#h").val());
	localStorage.setItem("i",$("#i").val());
	localStorage.setItem("j",$("#j").val());
    
   alert("O valor de a: "+x); 
   
}
    function carregarDados(){	
	if (localStorage.length > 0)
    {
		$("#a").val(localStorage.getItem("a"));
		$("#b").val(localStorage.getItem("b"));
		$("#c").val(localStorage.getItem("c"));
		$("#d").val(localStorage.getItem("d"));
		$("#e").val(localStorage.getItem("e"));
		$("#f").val(localStorage.getItem("f"));
		$("#g").val(localStorage.getItem("g"));
		$("#h").val(localStorage.getItem("h"));
		$("#i").val(localStorage.getItem("i"));
		$("#j").val(localStorage.getItem("j"));
        
		
	}
	else
	{
		alert("Nenhum registro encontrado");
	}
        
}
      $(document).ready(function() {
                $("#btn").click(function() {
                    var valor = "";
                    var x=parseInt("");
                    //Executa Loop entre todas as Radio buttons com o name de valor
                    $("input:radio[name=sexo]").each(function() {
                        //Verifica qual está selecionado
                        if ($(this).is(":checked")){
                            valor = parseInt($(this).val());
                            x=parseInt(valor);
                            x++;}
                    });
                    alert(x);
                });
            });