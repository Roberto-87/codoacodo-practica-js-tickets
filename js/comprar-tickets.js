
let botonResumen= document.getElementById('btnResumen')
let valorTicket= 200
let totalAPagar_p= document.createElement('p')
let cantidad;
let categoria;

const resumenAPagar=()=>{
  totalAPagar_p.setAttribute('id', 'resumenAPagar')
  let totalAPagar_span;
  totalAPagar_span= document.getElementById('totalPago')
  totalAPagar_span.appendChild(totalAPagar_p)
  totalAPagar_p.innerText=calculoTotal()      
   }



const calculoTotal=()=> {
   let resumen={ cantidad:parseInt(document.getElementById('cantidadTickets').value), categoria:parseInt(document.getElementById('categoriaSelect').value)}     
    
      //estudiante:  
         if(resumen.categoria===1){
          return resumen.cantidad * valorTicket * 80/100;
      // //trainee:
       }else if (resumen.categoria===2){
          return resumen.cantidad* valorTicket * 50/100; 
      // //junior:  
       }else if (resumen.categoria===3){
          return resumen.cantidad* valorTicket * 15/100;  
      // //sin categoria:       
       }else if (resumen.categoria===0){
          return resumen.cantidad* valorTicket;    
       }
       return 'completá todos los campos'
}

botonResumen.addEventListener('click',resumenAPagar)

let botonBorrar= document.getElementById('btnBorrar')

const borrarResumen=()=>{
   totalAPagar_p.innerText= ''
}
botonBorrar.addEventListener('click', borrarResumen)