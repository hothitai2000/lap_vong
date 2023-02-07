var Product = [
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
     },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
     },
     {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/12-305c5dfc-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
 }]
    var Producbc = [
    {
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_1.jpg?1663905428530",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    
     },
    {
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_2.jpg?1663905428530",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    },
     {
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_3.jpg?1663905428530",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    },
    {
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_4.jpg?1663905428530",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    }];
    var Producnb = [
     {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/…d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/…b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
     },
     {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/…c-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
    },
    {
         img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590",
         Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
         Price: "250.000đ"
    
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/7.png?v=1568944398257",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
     },
    {
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/6.png?v=1568944235997",
        Name: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        Price: "250.000đ"
    
     }];
    function listProduct() {
         for (let i = 0; i <Producbc.length; i++) {
            var demo = '<div class="col-3">';
                demo += '<div class="card" style="width: 18rem;">';
                demo += '<img class="card-img-top" src="' + Product[i].img + 'alt="Card image cap">';
                demo += '<div class="card-body">'
                demo += '<h5 class="card-title">' + Product[i].Name + '</h5>';
                demo += '<p class="card-text">' + Product[i].Price + '</p>';
                demo += '<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
                demo += '</div>';
                demo += '</div>';
                demo += '</div>';
                console.log(demo); 
                document.getElementById('Producbc').innerHTML += demo;
    }
         for (let i = 0; i < Producnb.length; i++) {
             var demo = '<div class="col-3">';
                 demo += '<div class="card" style="width: 18rem;">';
                 demo += '<img class="card-img-top" src="' + Product[i].img + ' alt="Card image cap">';
                 demo += '<div class="card-body">'
                demo += '<h5 class="card-title">' + Product[i].Name + '</h5>';
                demo += '<p class="card-text">' + Product[i].Price + '</p>';
                demo += '<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
                 demo += '</div>';
                 demo += '</div>';
                 demo += '</div>';
                console.log(demo);
                document.getElementById('Producnb').innerHTML += demo;
     }
    
    }
    function datmua() {
    alert("Đặt mua thành công !")
    }
