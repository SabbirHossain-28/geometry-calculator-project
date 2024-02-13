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
function inputValue(){
    const getBaseInputValue=takeInputByInputField('input-field-base');
    const getHeightInputValue=takeInputByInputField('input-field-height');
    const areaCalculated=0.5*getBaseInputValue*getHeightInputValue;
    const areaValue=calculatedArea('area-of-triangle',areaCalculated)
}