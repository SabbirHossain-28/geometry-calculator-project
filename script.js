function takeInputByInputField(inputValue){
    const getValue=document.getElementById(inputValue);
    const valueFromInputField=getValue.value;
    const numberTypeInput=parseFloat(valueFromInputField);
    return(numberTypeInput)
}

function calculatedArea(areaId,area){
    const getarea=document.getElementById(areaId,area);
    getarea.innerText=area;
    return(getarea)
}
function inputValue1(){
    const getBaseInputValue=takeInputByInputField('input-field-base');
    const getHeightInputValue=takeInputByInputField('input-field-height');
    const areaCalculated=0.5*getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-triangle',areaCalculated)
}
function inputValue2(){
    const getBaseInputValue=takeInputByInputField('input-field-width');
    const getHeightInputValue=takeInputByInputField('input-field-length');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-rectangle',areaCalculated)
}
function inputValue3(){
    const getBaseInputValue=takeInputByInputField('input-field-parallelogram-base');
    const getHeightInputValue=takeInputByInputField('input-field-parallelogram-height');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-parallelogram',areaCalculated)
}
function inputValue4(){
    const getBaseInputValue=takeInputByInputField('input-field-diameter1');
    const getHeightInputValue=takeInputByInputField('input-field-diameter2');
    const areaCalculated=0.5*getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-rhombus',areaCalculated)
}
function inputValue5(){
    const getBaseInputValue=takeInputByInputField('input-field-pentagon-base');
    const getHeightInputValue=takeInputByInputField('input-field-pentagon-height');
    const areaCalculated=getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-pentagon',areaCalculated)
}
function inputValue6(){
    const getBaseInputValue=takeInputByInputField('input-field-ellips-a-axis');
    const getHeightInputValue=takeInputByInputField('input-field-ellips-b-axis');
    const areaCalculated=3.14*getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-ellips',areaCalculated)
}