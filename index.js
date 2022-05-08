function startGame() {
    showTextNode(1)
    
}

function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    

    let textElements = document.getElementById('gameText')              //Character Text
    let backgroundImage = document.querySelector('.backgroundImage')    //Background Image
    let characterName = document.getElementById('gameName')             //Character Name
    let characterA = document.querySelector('.characterA')              //Character Image
    let bgTransition = document.getElementById('transitionScreen')      //Transition Phase

    let buttonA = document.getElementById('choiceA')         //Choices
    let buttonB = document.getElementById('choiceB')
    let buttonC = document.getElementById('choiceC')
    let buttonD = document.getElementById('choiceD')

    buttonA.addEventListener('click', selectedOptionA)    //Next set of TextNodes
    buttonB.addEventListener('click', selectedOptionB)
    buttonC.addEventListener('click', selectedOptionC)
    buttonD.addEventListener('click', selectedOptionD)
    
    function selectedOptionA(){
        showTextNode(textNode.options[0].nextText)
    }

    function selectedOptionB(){
        showTextNode(textNode.options[1].nextText)
    }

    function selectedOptionC(){
        showTextNode(textNode.options[2].nextText)
    }

    function selectedOptionD(){
        showTextNode(textNode.options[3].nextText)
    }

    if(textNode.specialBGChange == true){
        bgTransition.style.pointerEvents = "all"
        bgTransition.className = "bgSmack";
        setTimeout(function(){
            bgTransition.className ="";
            bgTransition.style.pointerEvents = "none"
        }, 2000) 
    } else if(textNode.backgroundChange == true){
        bgTransition.style.pointerEvents = "all"
        bgTransition.className = "bgTransition";
        setTimeout(function(){
            bgTransition.className ="";
            bgTransition.style.pointerEvents = "none"
        }, 4000) 
    }


    if(textNode.specialBGChange == true){
        setTimeout(function(){
            backgroundImage.style.backgroundImage = textNode.background
            textElements.innerHTML = textNode.text
            if(textNode.characterChange == true){
                characterA.src = textNode.character
                characterName.innerHTML = textNode.name
            }
            buttonA.innerHTML = textNode.options[0].text  //Dialogue Text
            buttonB.innerHTML = textNode.options[1].text
            buttonC.innerHTML = textNode.options[2].text
            buttonD.innerHTML = textNode.options[3].text
        
            if(textNode.options[0].text === null){
                buttonA.style.display = "none";
            }
        
            if(textNode.options[1].text === null){
                buttonB.style.display = "none";
            }
        
            if(textNode.options[2].text === null){
                buttonC.style.display = "none";
            }
        
            if(textNode.options[3].text === null){
                buttonD.style.display = "none";
            }
        }, 375)
    } else if(textNode.backgroundChange == true){
        setTimeout(function(){
            backgroundImage.style.backgroundImage = textNode.background
            textElements.innerHTML = textNode.text
            if(textNode.characterChange == true){
                characterA.src = textNode.character
                characterName.innerHTML = textNode.name
            }
            buttonA.innerHTML = textNode.options[0].text  //Dialogue Text
            buttonB.innerHTML = textNode.options[1].text
            buttonC.innerHTML = textNode.options[2].text
            buttonD.innerHTML = textNode.options[3].text
        
            if(textNode.options[0].text === null){
                buttonA.style.display = "none";
            }
        
            if(textNode.options[1].text === null){
                buttonB.style.display = "none";
            }
        
            if(textNode.options[2].text === null){
                buttonC.style.display = "none";
            }
        
            if(textNode.options[3].text === null){
                buttonD.style.display = "none";
            }
        },2000)
    } else{
        textElements.innerHTML = textNode.text
        if(textNode.characterChange == true){
            characterA.src = textNode.character
            characterName.innerHTML = textNode.name
            buttonA.innerHTML = textNode.options[0].text  //Dialogue Text
            buttonB.innerHTML = textNode.options[1].text
            buttonC.innerHTML = textNode.options[2].text
            buttonD.innerHTML = textNode.options[3].text
        
            if(textNode.options[0].text === null){
                buttonA.style.display = "none";
            }
        
            if(textNode.options[1].text === null){
                buttonB.style.display = "none";
            }
        
            if(textNode.options[2].text === null){
                buttonC.style.display = "none";
            }
        
            if(textNode.options[3].text === null){
                buttonD.style.display = "none";
            }
        }
    }

    let counterForText = textNode
    console.log(counterForText)
}




const textNodes = [                                            //Character Interactives
    {
        id: 1,
        text: 'Overall test 1, choose an option',
        name: "Yin",
        character: "assets/Characters/Taro/Taro.png",
        background: "url(./assets/backgroundImages/yuiBackground/yuiCafe.png)",
        specialBGChange: false,
        characterChange: true,
        backgroundChange: false,
        options:[
            {
                text: "Test A",
                nextText: 2
            },
            {
                text: "Test B",
                nextText: 2
            },
            {
                text: "Test C",
                nextText: 2
            },
            {
                text: "Test D",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Overall Test 2, Test 1 worked!',
        name: "Nova",
        character: "assets/Characters/Taro/Taro.png",
        background: "url(./assets/backgroundImages/taroBackground/TaroOffice.jpg)",
        specialBGChange: false,
        characterChange: true,
        backgroundChange: false,
        options:[
            {
                text:"Confirmed Test A works",
                nextText: 3
            },
            {
                text:"Confirmed Test B works",
                nextText: 3
            },
            {
                text:"Confirmed Test C works!",
                nextText: 3
            },
            {
                text: null,
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Overall test 3, It worked again!',
        name: "Taro",
        character: "assets/Characters/Taro/TaroShock.png",
        background: "url(./assets/backgroundImages/yuiBackground/yuiCafe.png)",
        specialBGChange: false,
        characterChange: true,
        backgroundChange: false,
        options:[
            {
                text:"End test?",
                nextText:4
            },
            {
                text: null,
                nextText: 4
            },
            {
                text: null,
                nextText: null
            },
            {
                text: null,
                nextText: null
            },
        ]
    },
    {
        id: 4,
        text: 'Test 4, character test',
        name: "Whoever this is",
        character: "assets/Characters/Taro/TaroUpset.png",
        background: "url(./assets\backgroundImages\taroBackground\TaroOffice.jpg)",
        specialBGChange: false,
        characterChange: false,
        backgroundChange: false,
        options:[
            {
                text:"asd",
                nextText: 1
            },
            {
                text: null,
                nextText: null
            },
            {
                text: null,
                nextText: null
            },
            {
                text: null,
                nextText: null
            },
        ]
    },
]

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        startGame()
    }
}