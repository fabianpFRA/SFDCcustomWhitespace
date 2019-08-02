({
    init : function(component, event, helper) {
        console.log('Init');
        var theColString = component.get('v.theColumns');
        theColString = theColString.split(',');
        component.set('v.theColumnsValues', theColString);
        console.log('theColString: ', theColString);
        
        var theFieldString = component.get('v.theFields');
        theFieldString = theFieldString.split(',');
        console.log('theFieldString: ', theFieldString);
        
        var theLeftCols = component.get('v.theLeftCols');
        theLeftCols = theLeftCols.split(',');
        console.log('theLeftCols: ', theLeftCols);
        
        var arrays = [], size = 3;
        
        while (theFieldString.length > 0){
            arrays.push(theFieldString.splice(0, theColString.length));
        }
        
        console.log(arrays);
        
        var theTotalSpaces = theColString.length*theLeftCols.length;
        try{
            for(let i=0;i<theLeftCols.length;i++){
                var tableRow = document.createElement('tr');
                tableRow.setAttribute("class", "rowHeight" );
                var tableData = document.createElement('td');
                tableData.setAttribute("class", "leftCol" );
                var tableDataNode = document.createTextNode(theLeftCols[i]);
                tableData.appendChild(tableDataNode);
                tableRow.appendChild(tableData);
                for(let z=0;z<theColString.length;z++){
                    var tableData = document.createElement('td');
                    tableData.setAttribute("class", "fieldCols" );
                    if(arrays[i][z]){
                        if(arrays[i][z].indexOf('http') !== -1){
                            var image = document.createElement('img');
                            image.setAttribute("src", arrays[i][z]);
                            image.setAttribute("class", 'imageSize');
                            tableData.appendChild(image);
                        }else{
                            var tableDataNode = document.createTextNode(arrays[i][z]);
                            tableData.appendChild(tableDataNode);
                        }
                    }
                    else{
                        var tableDataNode = document.createTextNode('');
                        tableData.appendChild(tableDataNode);
                    }
                    
                    tableRow.appendChild(tableData);
                }
                document.getElementById("data").appendChild(tableRow);
            }
        }
        catch(e){
            console.log('Error: ', e);
        }
        
        
        var theRowHeight = component.get('v.theRowHeight');
        console.log('theRowHeight: ', theRowHeight);
        console.log('rowSelections: ', $(".rowHeight"));
        $(".rowHeight").css("height", theRowHeight);
        
        var theImageHeight = component.get('v.theImageHeight');
        console.log('theImageHeight: ', theImageHeight);
        console.log('imageSelections: ', $(".imageSize"));
        $(".imageSize").css("max-height", theImageHeight);
        
        var theLeftColWidth = component.get('v.theLeftColWidth');
        console.log('theLeftColWidth: ', theLeftColWidth);
        console.log('leftColSelections: ', $(".leftCol"));
        $(".leftCol").css("width", theLeftColWidth);
        
    }
})
