
function formdata() 
{
var region= document.getElementById("region").value;
var lastname1= document.getElementById("category").value;
document.writeln("<h1>Confirmation Page</h1><br>");
document.writeln("Thank you for completing this form.<br><br>");
document.writeln("The first name you entered is " + firstname + "<br>");
document.writeln("The last name you entered is " + lastname);
}




function initializeViz(){
    var vizDiv = document.getElementById("tableauViz");
 
    var vizUrl = "https://public.tableau.com/views/testingdashboardVersion2_16069950242490/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
    var vizOptions = {};

    viz = new tableauSoftware.Viz(vizDiv, vizUrl, vizOptions);    

  };

function vizFilter(filterName,filterValue,filterType){
  //getActiveSheet() can be a dashboard or a worksheet
  sheet=viz.getWorkbook().getActiveSheet();


if(sheet.getSheetType() === 'worksheet'){
sheet.applyFilterAsync(filterName,filterValue,filterType);
}
else{

worksheetArray = sheet.getWorksheets();
for(var i =0; i < worksheetArray.length; i++)
{
worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
console.log(worksheetArray)
}
}
};



function searchFilter(filterName, filterType){
    //getActiveSheet() can be a dashboard or a worksheet
    sheet=viz.getWorkbook().getActiveSheet();
    var filterValue = document.getElementById("category").value;
    
  
  if(sheet.getSheetType() === 'worksheet'){
  sheet.applyFilterAsync(filterName,filterValue,filterType);
  }
  else{
  
  worksheetArray = sheet.getWorksheets();
  for(var i =0; i < worksheetArray.length; i++)
  {
  worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
  console.log(worksheetArray)
  }
  }
  };







