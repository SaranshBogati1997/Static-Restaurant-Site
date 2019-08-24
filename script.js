var images =["images/app1.jpg",
			"images/app2.jpg",
			"images/app3.jpg",
			"images/app4.jpg"
			];
var entree =[
	"images/ent1.jpg",
			"images/ent2.jpg",
			"images/ent3.jpg",
			"images/ent4.jpg"
];

var dessert = [
	"images/des1.jpg",
			"images/des2.jpg",
			"images/des3.jpg",
			"images/des4.jpg"
]

var i=0;
var j=0;
var k=0;

function changeImg(){
	document.getElementById('appImage').src=images[i];

	if(i<(images.length)-1){
		i++;
	}
	else{
		i=0;
	}
	
}

function entChange(){
	document.getElementById('entImages').src=entree[j];

	if(j<(entree.length)-1){
		j++;
	}
	else{
		j=0;
	}
}
function dessertChange(){
	document.getElementById('desImages').src=dessert[k];

	if(k<(dessert.length)-1){
		k++;
	}
	else{
	k=0;
	}
}

setInterval(changeImg,2000);
setInterval(entChange,2000);
setInterval(dessertChange,2000);