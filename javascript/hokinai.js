
buttonRedirect('btn-test','test.html');

var textLogo = document.getElementById('textLogo');
var textContact = document.getElementById('textContact');
var imgLogo = document.getElementById('imgLogo');
var intPosBotHeader = textLogo.getBoundingClientRect().bottom; 
var strLogoPosition="top";
// console.log(intPosBotHeader);

addEventListener("scroll",()=>{	
	animScroll()	
})



function animScroll(){
	let intScrollY=window.scrollY;	
	switch(strLogoPosition){
		case "top":
		if(intScrollY>intPosBotHeader){							
			textLogo.classList.remove("animLogoUp")
			textLogo.classList.add("animLogoDown")

			imgLogo.classList.remove("animLogoImgUp")
			imgLogo.classList.add("animLogoImgDown")
			strLogoPosition="bottom";
		}
		break;
		case "bottom":
			//TOP
			if(intScrollY<intPosBotHeader){
				textLogo.classList.remove("animLogoRight")	
				textLogo.classList.remove("animLogoDown")
				textLogo.classList.add("animLogoUp")

				imgLogo.classList.remove("animLogoImgDown")
				imgLogo.classList.add("animLogoImgUp")
				strLogoPosition="top";
			}
			//LEFT
			if(intScrollY==document.body.scrollHeight-window.innerHeight){				
				textLogo.classList.remove("animLogoRight")
				textLogo.classList.add("animLogoLeft")	

				textContact.classList.remove("animLogoLeft")		
				textContact.classList.add("animLogoRight")				
				strLogoPosition="bottomLeft";
			}
			break;
			case "bottomLeft":
			if(intScrollY<=document.body.scrollHeight-window.innerHeight){
				textLogo.classList.remove("animLogoLeft")
				textLogo.classList.add("animLogoRight")

				textContact.classList.remove("animLogoRight")
				textContact.classList.add("animLogoLeft")
				strLogoPosition="bottom"
			}
			break;
		}
	}

	function buttonRedirect(id,destination){
		$btnTest = document.getElementById('btnTest');
		$btnTest.addEventListener('click',()=>{
			location=destination
		})
	}
