var viz;
var workbook;
var activeSheet;

function initViz() {

    var containerDiv = document.getElementById("vizContainer"),
		//The url where the test dashboard is hosted
        //url = "https://public.tableau.com/views/testingdashboard_16069128488460/BainwithSSD", 
		url = "https://public.tableau.com/views/testingdashboard_v2020_1_16069842719320/Dashboard1"
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");
					//Just to confirm the dashboard is working through the web browser console
                }

        };
	//Initializing tableau inherent object from tableau API
    viz = new tableau.Viz(containerDiv, url, options);
}


//A single function for all the category
//Filter name is the name of the field
//Filter value is the element or value of the field specified in the filterName parameter
function category(filterName,filterValue,filterType){
   
   //this applies the filter to the active sheet
    activeSheet.applyFilterAsync(filterName,filterValue,filterType)
};

function cat(filterName,filterValue,filterType){
	
	viz.getWorkbook().activateSheetAsync("Bain with SSD")
	
	.then(function (){
   
   //this applies the filter to the active sheet
    return activeSheet.applyFilterAsync(filterName,filterValue,filterType);
    });
};
//A single function for all the regions
//Filter name is the name of the field
//Filter value is the element or value of the field specified in the filterName parameter

function region(filterName,filterValue,filterType){
	
   //this applies the filter to the active sheet
    activeSheet.applyFilterAsync(filterName,filterValue,filterType)
};













