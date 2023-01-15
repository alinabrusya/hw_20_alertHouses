(()=>{

    const imgDB = [
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-apartment-1.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-condo-2.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-co-op-3.jpg',
        'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-single-family-4.jpg',
    ];

    //зона картинок
    const imgList = document.getElementById('imgList');
    //все окно, которое будет темнеть
    const modalZoneDiv = document.getElementById('alertZone');
    //всплывающее окно
    const modalAlertDiv = document.getElementById('alertContent');
    //картинка внутри всплывающей зоны
    const imgContent = document.getElementById('imgContent')

    const render = () => {
        //nodes - массив картинок, которй мы получаем из массива строк ссылок с помощью map
        const nodes = imgDB.map((value)=>{
            //const imgHTML = `<img src="${value}" style="height: 80px; width:80px" >`;
            //return imgHTML;
            const nodeImg = document.createElement('img');
            nodeImg.style.height = '80px';
            nodeImg.style.width = '80px';
            nodeImg.src = value;
            return nodeImg;
        });

            //каждый элемент нового массива картинок вставляем в конец дива - зоны картинок
            nodes.forEach((itemNode)=>{
            imgList.appendChild(itemNode);
        });

            //если происходит нажатие на область с ссылкой - наши картинки, то зона затемнения темнеет и всплывает окно, в которое вставляется нажатая картинка
        imgList.addEventListener('click', (event)=>{
            if(event.target.src){
                modalZoneDiv.classList.remove('hide');
                modalAlertDiv.classList.remove('hide');
                imgContent.src = event.target.src;
            }
        });
    }
    //если происходит нажатие на серую зону, то она белеет и всплывающее окно прячется
    modalZoneDiv.addEventListener('click', ()=>{
        modalZoneDiv.classList.add('hide');
        modalAlertDiv.classList.add('hide');
    });
    render();

})();