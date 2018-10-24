 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task + "          ";
             let done = document.createElement("button");
             let doneContent = document.createTextNode("Hecho");
             let del = document.createElement("button");
             let delContent = document.createTextNode("Eliminar");
             del.appendChild(delContent);
             done.appendChild(doneContent);
             element.appendChild(done);
             element.appendChild(del);             
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             del.addEventListener("click", function(){
                console.log(this.parentNode);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             done.addEventListener("click", function(){
                console.log(this.parentNode);
                let parent = element.parentNode;
                if(parent){
                    element.style.textDecoration="line-through";
                }
             });
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }