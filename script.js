function takeInputByInputField(inputValue){
    const getValue=document.getElementById(inputValue);
    const valueFromInputField=getValue.value;
    const numberTypeInput=parseFloat(valueFromInputField);
    return(numberTypeInput)
}

function calculatedArea(areaId,area){
    const getarea=document.getElementById(areaId);
    getarea.innerText=area;
    return(getarea)
}
function resultAdd(containerId,calculatedResult){
    const calculateEntry=document.getElementById('result-collection');
    const count=calculateEntry.childElementCount;
    const p=document.createElement('p');
    // const resultContainer=document.getElementById(containerId)
    // const outputResult=document.createElement('p');
    p.innerHTML=`${count}.The area of ${containerId} is ${calculatedResult} cm<sup>2</sup>`;
    calculateEntry.appendChild(p);
    // return(resultContainer);
}
function inputValue1(){
    const getBaseInputValue=takeInputByInputField('input-field-base');
    const getHeightInputValue=takeInputByInputField('input-field-height');
    const areaCalculated=0.5*getBaseInputValue*getHeightInputValue;
    calculatedArea('area-of-triangle',areaCalculated);
    resultAdd('Triangle',areaCalculated);
}
function inputValue2(){
    const getBaseInputValue=takeInputByInputField('input-field-width');
    const getHeightInputValue=takeInputByInputField('input-field-length');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    calculatedArea('area-of-rectangle',areaCalculated);
    resultAdd('Rectangle',areaCalculated);
}
function inputValue3(){
    const getBaseInputValue=takeInputByInputField('input-field-parallelogram-base');
    const getHeightInputValue=takeInputByInputField('input-field-parallelogram-height');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    resultAdd('Parallelogram',areaCalculated);
}
function inputValue4(){
    const getBaseInputValue=takeInputByInputField('input-field-diameter1');
    const getHeightInputValue=takeInputByInputField('input-field-diameter2');
    const areaCalculated=0.5*getBaseInputValue*getHeightInputValue;
    calculatedArea('area-of-rhombus',areaCalculated);
    resultAdd('Rhombus',areaCalculated);
}
function inputValue5(){
    const getBaseInputValue=takeInputByInputField('input-field-pentagon-base');
    const getHeightInputValue=takeInputByInputField('input-field-pentagon-height');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    calculatedArea('area-of-pentagon',areaCalculated);
    resultAdd('Pentagon',areaCalculated);
}
function inputValue6(){
    const getBaseInputValue=takeInputByInputField('input-field-ellips-a-axis');
    const getHeightInputValue=takeInputByInputField('input-field-ellips-b-axis');
    const areaCalculated=3.14*getBaseInputValue*getHeightInputValue;
    calculatedArea('area-of-ellips',areaCalculated);
    resultAdd('Ellips',areaCalculated);
}