function startGame() {
    showTextNode(1)

}

function showTextNode(textNodeIndex) {
    
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    
    let textElements = document.getElementById('gameText')                  //Character Text
    let backgroundImage = document.querySelector('.backgroundImage')        //Background Image
    let characterName = document.getElementById('gameName')                 //Character Name
    let characterA = document.querySelector('.characterA')                  //Character Image
    let bgTransition = document.getElementById('transitionScreen')          //Transition Phase
    let gameTextAnimation = document.querySelector('.gameTextAnimation')    //TextAnimation

    // function dialogueAnimation(){
    //     textElements.className = "gameTextAnimation"
    //     let counterForText = textNode.text.length
    //     gameTextAnimation.style.animation = `typingAnimation 3s(${counterForText}, end)`
    //     setTimeout (function(){
    //         textElements.className=""
    //     },3000)
    // }

    let buttonA = document.getElementById('choiceA')         //Choices
    let buttonB = document.getElementById('choiceB')
    let buttonC = document.getElementById('choiceC')
    let buttonD = document.getElementById('choiceD')

    buttonA.addEventListener('click', selectedOptionA)    
    buttonB.addEventListener('click', selectedOptionB)
    buttonC.addEventListener('click', selectedOptionC)
    buttonD.addEventListener('click', selectedOptionD)

    function removeListeners(){
        buttonA.removeEventListener('click', selectedOptionA)    
        buttonB.removeEventListener('click', selectedOptionB)
        buttonC.removeEventListener('click', selectedOptionC)
        buttonD.removeEventListener('click', selectedOptionD)
    }
    
    function selectedOptionA(){
        showTextNode(textNode.options[0].nextText)
        removeListeners()
    }
    function selectedOptionB(){
        showTextNode(textNode.options[1].nextText)
        removeListeners()
    }

    function selectedOptionC(){
        showTextNode(textNode.options[2].nextText)
        removeListeners()
    }

    function selectedOptionD(){
        showTextNode(textNode.options[3].nextText)
        removeListeners()
    }

    function noText(){
        buttonA.style.display = ""
        buttonB.style.display = ""
        buttonC.style.display = ""
        buttonD.style.display = ""


        if(typeof textNode.options[0].text != "string"){
            buttonA.style.display = "none";
        }
    
        if(typeof textNode.options[1].text != "string"){
            buttonB.style.display = "none";
        }
    
        if(typeof textNode.options[2].text != "string"){
            buttonC.style.display = "none";
        }
    
        if(typeof textNode.options[3].text != "string"){
            buttonD.style.display = "none";
        }
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
            noText()
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
            noText()
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
            noText()
        }
    }
}




const textNodes = [                                            //Character Interactives
    {
        id: 1,
        text: 'Overall test 1, choose an option',
        name: "Taro",
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
        name: "Taro",
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
                nextText: null
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
    {
        id: 4,
        text: 'Test 4, character test',
        name: "Whoever this is",
        character: "assets/Characters/Taro/TaroUpset.png",
        background: "url(./assets\backgroundImages\taroBackground\TaroOffice.jpg)",
        specialBGChange: false,
        characterChange: true,
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

