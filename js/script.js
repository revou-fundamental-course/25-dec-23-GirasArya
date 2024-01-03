let formula = true
let geometry = true

function handleStateFormula(isClicked){
    formula = isClicked
    updateStateFormula()
    console.log(formula)
}

function updateStateFormula(){
    const areaToggle = document.getElementById("area")
    const perimeterToggle = document.getElementById("perimeter")

    const areaTogglePar = document.getElementById("area-par")
    const perimeterTogglePar = document.getElementById("perimeter-par")

    const areaElement = document.getElementById("triangle-area-container")
    const perimeterElement = document.getElementById("triangle-perimeter-container")

    const areaParElement = document.getElementById("parallelogram-area-container")
    const perimeterParElement = document.getElementById("parallelogram-perimeter-container")
    if (formula) {
        areaElement.classList.add('formula-toggle-active')
        areaParElement.classList.add('formula-toggle-active')
        areaToggle.classList.add('formula-toggle-active')
        areaTogglePar.classList.add('formula-toggle-active')

        
        perimeterElement.classList.remove('formula-toggle-active')
        perimeterParElement.classList.remove('formula-toggle-active')
        perimeterToggle.classList.remove('formula-toggle-active')
        perimeterTogglePar.classList.remove('formula-toggle-active')

    }
    else{
        areaElement.classList.remove('formula-toggle-active')
        areaParElement.classList.remove('formula-toggle-active')
        areaToggle.classList.remove('formula-toggle-active')
        areaTogglePar.classList.remove('formula-toggle-active')

        perimeterElement.classList.add('formula-toggle-active')
        perimeterParElement.classList.add('formula-toggle-active')
        perimeterToggle.classList.add('formula-toggle-active')
        perimeterTogglePar.classList.add('formula-toggle-active')

    }
}

function handleGeometry(e){
    geometry = e
    updateStateGeometry()
}

function updateStateGeometry(){
    const triToggle = document.getElementById('triangle')
    const parToggle = document.getElementById("parallelogram")
    const triangleBlock = document.getElementById('triangle-container')
    const parBlock = document.getElementById('parallelogram-container')
    if (geometry) {
        triangleBlock.classList.add('geometric-active')
        parBlock.classList.remove('geometric-active')

        triToggle.classList.add('geometric-toggle-active')
        parToggle.classList.remove('geometric-toggle-active')
    }
    else{
        triangleBlock.classList.remove('geometric-active')
        parBlock.classList.add('geometric-active')

        triToggle.classList.remove('geometric-toggle-active')
        parToggle.classList.add('geometric-toggle-active')
    }
}
