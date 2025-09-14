let todo=[];

let req=prompt("Please Enter your request");

while(true){
    if(req=="quit"){
        console.log("Request is quiting");
        break;
    }
     if(req=="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);  
        }
           console.log("-----------");
        }
      
    
      else if(req=="add"){
        let task=prompt("Enter your req to add");
        todo.push(task);
        console.log("task added");
      }
      else if(req="delete")
      {
         let idx=prompt("Enter your req to delete");
         console.log(todo.splice(idx,1));
           console.log("task deleted");
      }
      req = prompt("Please Enter your request"); 




}