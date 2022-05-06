function startGame() {
    showTextNode(1)
    
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    let textElements = document.getElementById('gameText')     //Character Text
    textElements.innerHTML = textNode.text

    let characterName = document.getElementById('gameName')     //Character Name
    console.log(textNode.checkChange)
    if (textNode.checkChange && textNode.checkChange[0].nameChange == false){
        characterName.innerHTML = textNode.name
    }
    
    let backgroundImage = document.querySelector('.backgroundImage')    //Background Image
    if(textNode.backgroundChange = true){
        backgroundImage.style.backgroundImage = textNode.background
    }
    
    let characterA = document.querySelector('.characterA')      //Character Image
    if(textNode.characterChange = true){
        characterA.src = textNode.character
    }
    

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

const textNodes = [                                            //Array of files
    {
        id: 1,
        text: 'Overall test 1, choose an option',
        name: "Yin",
        character: "assets/Characters/Yin/Yin.png",
        background: "url(./assets/backgroundImages/yuiBackground/yuiCafe.png)",
        nameChange: true,
        characterChange: true,
        backgroundChange: true,
        checkChange:[
            {
                nameChange: false,
            }
        ],
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
        character: "assets/Characters/Nova/Nova.png",
        background: "url(./assets/backgroundImages/taroBackground/TaroOffice.jpg)",
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
        character: "assets/Characters/Taro/Taro.png",
        background: "url(./assets/backgroundImages/yuiBackground/yuiCafe.png)",
        options:[
            {
                text:"End test?"
            },
            {
                text: null,
                nextText: 2
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
    }
]

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        startGame()
    }
}