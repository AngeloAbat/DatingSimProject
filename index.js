const textElement = document.getElementById('gameText')
const choiceButtons = document.querySelector('.gameChoices') 

function startGame() {
    showTextNode(1)
    console.log("I got called , startGame()")
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    console.log(textElement)
    textElement.innerHTML = "textNode.text"
}

function selectOption(option){
}

const textNodes = [
    {
        id: 1,
        text: 'Dialogue Test 2, if it works?',
        options:[
            {
                text:"Test for Choice A!",
                nextText: 2
            },
            {
                text:"Test for Choice B!",
                nextText: 2
            },
            {
                text:"Test for Choice C!",
                nextText: 2
            },
            {
                text:"Test for Choice D!",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Dialogue Test 3, Test 2 worked!',
        options:[
            {
                text:"Confirmed Test A works",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Dialogue Test 4, It worked again!',
        options:[
            {
                text:"End test?"
            }
        ]
    }
]

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        startGame()
    }
}