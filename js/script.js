let formula = true
let geometry = true

function handleStateFormula(isClicked) {
    formula = isClicked
    updateStateFormula()
    console.log(formula)
}

function updateStateFormula() {
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
    else {
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

function handleGeometry(e) {
    geometry = e
    updateStateGeometry()
}

function updateStateGeometry() {
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
    else {
        triangleBlock.classList.remove('geometric-active')
        parBlock.classList.add('geometric-active')

        triToggle.classList.remove('geometric-toggle-active')
        parToggle.classList.add('geometric-toggle-active')
    }
}

let getTriangleArea = () => {
    let baseValue = parseFloat(document.getElementById('Tribase').value)
    let heightValue = parseFloat(document.getElementById('Triheight').value)

    let triArea = (1 / 2 * baseValue * heightValue)
    console.log(triArea)
    if (isNaN(triArea)) {
        alert("please input your numbers")
        }
        else{
            document.getElementById("tri-area-title").innerHTML = "Calculation : "
            document.getElementById("tri-area-formula").innerHTML = `A = 1/2 * ${baseValue} * ${heightValue}`
            document.getElementById('tri-res-area').innerHTML = `A = ${triArea}`
        }
        console.log(triArea)
}

let getTrianglePerimeter = () => {
    let firstSideVal = parseFloat(document.getElementById('first-side').value)
    let baseVal = parseFloat(document.getElementById('base').value)
    let secSideVal = parseFloat(document.getElementById('second-side').value)
    let triPerimeter = (firstSideVal + baseVal + secSideVal)
    console.log(triPerimeter)
    if (isNaN(triPerimeter)) {
        alert("please input your numbers")
        }
        else{
            document.getElementById("tri-par-title").innerHTML = "Calculation : "
            document.getElementById("tri-par-formula").innerHTML = `P = ${firstSideVal} + ${baseVal} +${secSideVal}`
            document.getElementById('tri-res-par').innerHTML = `P = ${triPerimeter}`
        }
        console.log(triPerimeter)
}

let getParallelArea = () => {
    let baseValuePar = parseFloat(document.getElementById('baseParall').value)
    let heightValuePar = parseFloat(document.getElementById('heightParall').value)

    let parArea = (baseValuePar * heightValuePar)
    if (isNaN(parArea)) {
    alert("please input your numbers")
    }
    else{
        document.getElementById("paral-area-title").innerHTML = "Calculation : "
        document.getElementById("paral-area-formula").innerHTML = `A = ${baseValuePar} * ${heightValuePar}`
        document.getElementById('paral-res-area').innerHTML = `A = ${parArea}`
    }
    console.log(parArea)
}

let getParallelPerimeter = () => {
    let firstSidePar = parseFloat(document.getElementById('first-side-par').value)
    let BasePar = parseFloat(document.getElementById('base-par').value)

    let parPerimeter = 2 * (firstSidePar + BasePar)

    if (isNaN(parPerimeter)) {
        alert("please input your numbers")
        }
        else{
            document.getElementById("paral-par-title").innerHTML = "Calculation : "
            document.getElementById("paral-par-formula").innerHTML = `P = 2(${firstSidePar} + ${BasePar})`
            document.getElementById('paral-res-par').innerHTML = `P = ${parPerimeter}`
        }

    console.log(parPerimeter)
}

let setResetVal = () => {
    document.getElementById("tri-area-title").innerHTML = ""
    document.getElementById("tri-area-formula").innerHTML = ""
    document.getElementById('tri-res-area').innerHTML = ""
    document.getElementById("tri-par-title").innerHTML = ''
    document.getElementById("tri-par-formula").innerHTML = '' 
    document.getElementById('tri-res-par').innerHTML = ''
    document.getElementById("paral-area-title").innerHTML = '' 
    document.getElementById("paral-area-formula").innerHTML = ''
    document.getElementById('paral-res-area').innerHTML = ''
    document.getElementById("paral-par-title").innerHTML = ''
    document.getElementById("paral-par-formula").innerHTML = '' 
    document.getElementById('paral-res-par').innerHTML = ''
}