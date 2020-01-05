function copy(){
  let text = document.querySelector("input[name='testText']").value;
  let currentActiveElement = document.activeElement;
  let input = document.createElement("input");
  input.style.position = "absolute";
  input.style.top = "-100";
  input.style.left = "-100";
  input.setAttribute("value",text);
  document.body.appendChild(input);
  input.focus();
  input.select();
  if(document.execCommand){
    document.execCommand("copy",true);
  } else {
    alert("不支持ececCommand");
  }
  currentActiveElement.focus();
  document.body.removeChild(input);
  document.querySelector("input[name='testText']").focus();
};
// (六脉神剑)不起作用
function bold(){
  var testBold = document.querySelector("span[name='testBold']");
  document.designMode = "On";
  document.contentEditable  = true;
  testBold.focus();
  if(document.execCommand){
    document.execCommand("Bold",true);
  }
  // document.designMode = "Off";
  // document.contentEditable  = false;
}