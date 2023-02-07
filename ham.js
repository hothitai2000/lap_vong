function ListProducts(){
    for(let i=0; i<Product.length;i++){
        if (Product[i].status=="1"){
            var demo='<div class="col-2">'; 
            demo+='<div class="card" style="width:12rem;">';
            demo+='<img src=' + Product[i].image + '>';  
            demo+='<div class="card-body">';
            demo+='<h5 clas="card body">';
            demo+='<h6 class="card-title">'+Product[i].name+'</h5>';
            demo+='<p class="card-text"style="color:#DDAC55;font-weight:bold">'+Product[i].price+'</p>';
            demo+='</div>';
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("banchay").innerHTML+=demo;
        }
        else{
            var demo='<div class="col-2">'; 
            demo+='<div class="card" style="width:12rem;">';
            demo+='<img src=' + Product[i].image + '>';  
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("noibat").innerHTML+=demo;
        }
    }
}