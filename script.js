function takeInputByInputField(inputValue){
    const getValue=document.getElementById(inputValue);
    const valueFromInputField=getValue.value;
    const numberTypeInput=parseFloat(valueFromInputField);
    return(numberTypeInput)
}
function inputValue(){
    const getInputValue=takeInputByInputField('input-field-base');
    console.log(getInputValue);
}