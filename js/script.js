/* Q1: function Ajout(id) {

    var x = document.getElementById(id);



     if(x.style.display == 'none'){
	x.style.display = 'block';
	}
     else{
	x.style.display = 'none';
	}
    
} */

/*Quastion 2*/  

function XX(id) {

    var x = document.getElementById(id);

    var elements;

	if (x.style.display == 'block')
    	x.style.display = 'none';
     else 

    	x.style.display = 'block';

	// recupere tous les elements ayant pour nom de classe "element"
    elements = document.getElementsByClassName('Element')
   
    // parcoure tous ces elements et les cache
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none' ;
    }
       
    //affiche uniquement l element selectionné
    if (x.style.display == 'none') {
           x.style.display = "block" ;
    }
}
	
  

/*Q3

function Ajout(id) {

    var x = document.getElementById(id);

    var elements;

	if (x.style.display == 'block')
    	x.style.display = 'none';
     else 

    	x.style.display = 'block';

	// recupere tous les elements ayant pour nom de classe "element"
    elements = document.getElementsByClassName('Element')
   
    // parcoure tous ces elements et les cache
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none' ;
    }
       
    //affiche uniquement l element selectionné
    if (x.style.display == 'none') {
           x.style.display = "block" ;
    }
setTimeout(function(){
x.style.display = "block";},1000
})

}  */



// Moves the tooltip element
tooltip.mouseMove = function (e) {
   // we don't use "this" because this method is assign to an event of document
   // and so is dereferenced
    if(e == undefined)
        e = event;

    if( e.pageX != undefined){ // gecko, konqueror,
        tooltip._x = e.pageX;
        tooltip._y = e.pageY;
    }else if(event != undefined && event.x != undefined && event.clientX == undefined){ // ie4 ?
        tooltip._x = event.x;
        tooltip._y = event.y;
    }else if(e.clientX != undefined ){ // IE6,  IE7, IE5.5
        if(document.documentElement){
            tooltip._x = e.clientX + ( document.documentElement.scrollLeft || document.body.scrollLeft);
            tooltip._y = e.clientY + ( document.documentElement.scrollTop || document.body.scrollTop);
        }else{
            tooltip._x = e.clientX + document.body.scrollLeft;
            tooltip._y = e.clientY + document.body.scrollTop;
        }
    /*}else if(event != undefined && event.x != undefined){ // IE6,  IE7, IE5.5
        tooltip.x = event.x + ( document.documentElement.scrollLeft || document.body.scrollLeft);
        tooltip.y = event.y + ( document.documentElement.scrollTop || document.body.scrollTop);
    */
    }else{
        tooltip._x = 0;
        tooltip._y = 0;
    }
    tooltip.moveTo( tooltip._x +tooltip.offsetx , tooltip._y + tooltip.offsety);

}

