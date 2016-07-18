$(function(){
  $("#btn").click(carregarDados);
});

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
