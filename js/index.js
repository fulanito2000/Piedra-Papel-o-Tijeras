var a=10;
function Menu($op){
var opc = $op;
var num = Math.floor(Math.random()*3)+1;

switch(opc){
	case '1'://piedra
	document.getElementById('player_choice').textContent = 'Elegiste: Piedra';
	if (num==1) {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Piedra';		
	} else if(num==2){
		document.getElementById('computer_choice').textContent = 'La PC eligió: Papel';
	}else {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Tijeras';		
	}
  	
		if (opc == num) {
			document.getElementById('resultado').textContent = 'Empataste';
		} else if(num == 3){
			score=ganar();
			
		}else{
			score=perder();
		}
	break;
	case '2'://papel
	document.getElementById('player_choice').textContent = 'Elegiste: Papel';
	if (num==1) {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Piedra';		
	} else if(num==2){
		document.getElementById('computer_choice').textContent = 'La PC eligió: Papel';
	}else {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Tijeras';		
	}
		if (opc == num) {
			document.getElementById('resultado').textContent = 'Empataste';
		} else if(opc > num){
			score=ganar();
		}else{
			score=perder();
		}
	break;
	case '3':
	document.getElementById('player_choice').textContent = 'Elegiste: Tijeras';
	if (num==1) {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Piedra';		
	} else if(num==2){
		document.getElementById('computer_choice').textContent = 'La PC eligió: Papel';
	}else {
		document.getElementById('computer_choice').textContent = 'La PC eligió: Tijeras';		
	}
		if (opc == num) {
			document.getElementById('resultado').textContent = 'Empataste';
		} else if(num == 2){
			score=ganar();
		}else{
			score=perder();
		}
	break;
	default:
        text = "No value found";
}//switch
}//funcion
function ganar() {
	
	a = a+1;
	 document.getElementById('resultado').textContent = 'Ganaste';
	 document.getElementById('score').textContent = a;
	 
}
function perder(){
	a= a-1;
	if (a==0) {
		alert("UPPS! te quedaste sin puntos");
		window.location="index.html";
	} else {
		document.getElementById('resultado').textContent = 'Perdiste';
		document.getElementById('score').textContent = a;}
}
