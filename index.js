function startGame() {
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    let textElements = document.getElementById('gameText')
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElements.innerHTML = textNode.text

    let buttonA = document.getElementById('choiceA')
    let buttonB = document.getElementById('choiceB')
    let buttonC = document.getElementById('choiceC')
    let buttonD = document.getElementById('choiceD')

    buttonA.innerHTML = textNode.options[0].text
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

const textNodes = [
    {
        id: 1,
        text: 'Dialogue Test 2, if it works?',
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