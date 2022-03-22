var searchData = {};
var dictionary = {};

var siteFilters = [];
var brandFilters = [];
var suburbFilters = [];

window.onload = function() {
        loadData();
}

async function loadData() {
    //retrieve info file
    let infoObj = await new Promise(function(resolve) {
        const infoRequest = new XMLHttpRequest();
        infoRequest.open("GET", `data/info.txt`);
        infoRequest.send();

        infoRequest.onload = function() {
            if (infoRequest.status == 200) {
                resolve(JSON.parse(infoRequest.responseText));
            } else if (infoRequest.status == 404) {
                console.error("Request Error 404: Could not find target");
            }
        };

        infoRequest.onerror = function() {
            console.error("Request Error: Network issues")
        };
        
        infoRequest.onprogress = function(e) {
            if (e.lengthComputable) {
                console.log(`${e.loaded} B of ${e.total} B loaded!`)
            } else {
                console.log(`${e.loaded} B loaded!`)
            }
        };
    });

    const fileNames = infoObj.fileNames;

    //compare info files
    let needsUpgrading = false;
    if (`infoFile=${JSON.stringify(infoObj)}` != document.cookie) {
        document.querySelector("body").innerHTML += `<div id="loading" class="loading"><div class="container"><h1>Loading Data</h1><p>This may take a bit</p><div id="progress-background"><div id="progress-bar"></div></div><p id="progress-update"></p></div></div>`;
        
        new Promise(function(resolve) {
            const deleteDB = indexedDB.deleteDatabase("db");

            deleteDB.onsuccess = function() {
                alert("delete");
                resolve();
            }
        });

        needsUpgrading = true;
    }

    //upgrading DB if needed
    if (needsUpgrading) {
        const db = await new Promise(function(resolve) {
            let request = indexedDB.open("db", 1);
            request.onsuccess = function() {
                resolve(false);
            }
            request.onupgradeneeded = function() {
                for (i = fileNames.length - 1; i >= 0; i--) {
                    request.result.createObjectStore(fileNames[i], {keypath: "ID"});
                }
            };
            request.onerror = function() {
                console.error(request.error);
            };
        });

        for (i = 0; i < fileNames.length; i++) {
            document.getElementById("progress-bar").style.width = `${((i + 1) / fileNames.length) * 100}%`
            document.getElementById("progress-update").innerHTML = `(1/1) Downloading Data (${i + 1} / ${fileNames.length})`;
            const fileName = fileNames[i];

            const data = await new Promise(function(resolve) {
                const fileName = fileNames[i];
                const request = new XMLHttpRequest();
                request.open("GET", `data/${fileName}.json`);
                request.send();
        
                request.onload = function() {
                    if (request.status == 200) {
                        resolve(request.responseText);
                    } else if (request.status == 404) {
                        console.error("Request Error 404: Could not find target");
                    }
                }
        
                request.onerror = function() {
                    console.error("Request Error: Network issues")
                }
                
                request.onprogress = function(e) {
                    if (e.lengthComputable) {
                        console.log(`${e.loaded} B of ${e.total} B loaded!`)
                    } else {
                        console.log(`${e.loaded} B loaded!`)
                    }
                }
            });

            const jsonData = JSON.parse(data);

            let headings = [];
            for (let j = 0; j < jsonData.fields.length; j++) {
                headings.push(jsonData.fields[j].id.replace("_", " "));
            }

            let stationInfo = {};
            for (let j = 0; j < jsonData.records.length; j++) {
                const id = jsonData.records[j][headings.indexOf("SiteId")];

                let info = stationInfo[id] || {
                    "ID": jsonData.records[j][headings.indexOf("SiteId")],
                    "Name": jsonData.records[j][headings.indexOf("Site Name")],
                    "Brand": jsonData.records[j][headings.indexOf("Site Brand")],
                    "Address": jsonData.records[j][headings.indexOf("Sites Address Line 1")],
                    "Suburb": jsonData.records[j][headings.indexOf("Site Suburb")],
                    "State": jsonData.records[j][headings.indexOf("Site State")],
                    "Postcode": jsonData.records[j][headings.indexOf("Site Post Code")],
                    "Latitude": jsonData.records[j][headings.indexOf("Site Latitude")],
                    "Longitude": jsonData.records[j][headings.indexOf("Site Longitude")],
                    "Fuel": {}
                };

                const fuelType = jsonData.records[j][headings.indexOf("Fuel Type")];

                if (info["Fuel"][fuelType] == undefined) {
                    info["Fuel"][fuelType] = {};
                }

                info["Fuel"][fuelType][Object.keys(info["Fuel"][fuelType]).length] = {
                    "Type": fuelType,
                    "Price": jsonData.records[j][headings.indexOf("Price")],
                    "Time": jsonData.records[j][headings.indexOf("TransactionDateutc")]
                };
                
                stationInfo[id] = info;
            }

            //old csv code
            /*let stationInfo = {};
            /for (let j = 0; j < rows.length; j++) {
                const currentData = rows[j];
                const id = currentData[headings.indexOf("SiteId")];

                if (id == "") {
                    continue;
                }

                let info;

                if (Object.keys(stationInfo).includes(id)) {
                    info = stationInfo[id];
                } else {
                    info = {
                        "ID": currentData[headings.indexOf("SiteId")],
                        "Name": currentData[headings.indexOf("Site Name")],
                        "Brand": currentData[headings.indexOf("Site Brand")],
                        "Address": currentData[headings.indexOf("Sites Address Line 1")],
                        "Suburb": currentData[headings.indexOf("Site Suburb")],
                        "State": currentData[headings.indexOf("Site State")],
                        "Postcode": currentData[headings.indexOf("Site Post Code")],
                        "Latitude": currentData[headings.indexOf("Site Latitude")],
                        "Longitude": currentData[headings.indexOf("Site Longitude")],
                        "Fuel": {}
                    }
                }

                const fuelType = currentData[headings.indexOf("Fuel Type")];
                const price = currentData[headings.indexOf("Price")];
                const time = currentData[headings.indexOf("TransactionDateutc")];

                if (info["Fuel"][fuelType] == undefined) {
                    info["Fuel"][fuelType] = {};
                }

                info["Fuel"][fuelType][Object.keys(info["Fuel"][fuelType]).length] = {
                    "Type": fuelType,
                    "Price": price,
                    "Time": time
                }

                stationInfo[id] = info;
            }*/
            
            const dbPromise = new Promise(function(resolve) {
                const dbRequest = indexedDB.open("db", 1);

                dbRequest.onsuccess = function() {
                    const db = dbRequest.result;
                    const transaction = db.transaction(fileName, "readwrite");
                    const objStore = transaction.objectStore(fileName);
    
                    const keys = Object.keys(stationInfo);
                    for (let k = 0; k < keys.length; k++) {
                        const obj = stationInfo[keys[k]];
                        objStore.add(obj, obj.ID);
                    }

                    resolve(true);
                }
            });
        }
    }

    //get DB 
    const db = await new Promise(function(resolve) {
        let request = indexedDB.open("db");

        request.onsuccess = function() {
            resolve(request.result);
        };

        request.onerror = function() {
            console.error(request.error);
        };
    });

    let distinctData = {
        "Name": [],
        "Brand": [],
        "Suburb": [],
    };
    
    //get data for datalists from db
    for (i = db.objectStoreNames.length - 1; i >= 0; i--) {
        //get data from specific store
        const allData = await new Promise(function(resolve) {
            const transaction = db.transaction(fileNames[i], "readonly");
            const objStore = transaction.objectStore(fileNames[i]);
            const objs = objStore.getAll();

            objs.onsuccess = function() {
                resolve(objs.result);
            };
        });

        for (let j = 0; j < allData.length; j++) {
            if (!distinctData.Name.includes(allData[j].Name)) {
                distinctData.Name.push(allData[j].Name);
            }
            if (!distinctData.Brand.includes(allData[j].Brand)) {
                distinctData.Brand.push(allData[j].Brand);
            }
            if (!distinctData.Suburb.includes(allData[j].Suburb)) {
                distinctData.Suburb.push(allData[j].Suburb);
            }

            //dictionary[stationInfo[keys[i]].Name] = stationInfo[keys[i]].ID;
            //dictionary[allData[j].siteName]
            dictionary[allData[j].Name] = allData[j].ID;
        }
    }

    //update datalists
    let toDisplay = {
        "Names": "",
        "Brands": "",
        "Suburbs": ""
    };
    
    for (let i = 0; i < distinctData.Name.length; i++) {
        toDisplay.Names += `<option>${distinctData.Name[i]}</option>`
    }
    for (let i = 0; i < distinctData.Brand.length; i++) {
        toDisplay.Brands += `<option>${distinctData.Brand[i]}</option>`
    }
    for (let i = 0; i < distinctData.Suburb.length; i++) {
        toDisplay.Suburbs += `<option>${distinctData.Suburb[i]}</option>`
    }

    document.getElementById("SiteNames").innerHTML = toDisplay.Names;
    document.getElementById("Brands").innerHTML = toDisplay.Brands;
    document.getElementById("Suburbs").innerHTML = toDisplay.Suburbs;

    searchData = distinctData;

    if (document.getElementById("loading") != null) {
        document.getElementById("loading").remove();
    }

    document.cookie = `infoFile=${JSON.stringify(infoObj)}; secure`
}

function addFilter(id) {
    const value = document.getElementById(id).value;
    switch (id) {
        case "siteName":
            if (!siteFilters.includes(value) && searchData.Name.includes(value)) {
                siteFilters.push(value);
            }
            break;
        case "brand":
            if (!brandFilters.includes(value) && searchData.Brand.includes(value)) {
                brandFilters.push(value);
            }
            break;
        case "suburb":
            if (!suburbFilters.includes(value) && searchData.Suburb.includes(value)) {
                suburbFilters.push(value);
            }
            break;
    }

    updateFilters();
}

function removeFilter(listname, value) {
    switch (listname) {
        case "siteName":
            siteFilters.splice(siteFilters.indexOf(value), 1);
            break;
        case "brand":
            brandFilters.splice(brandFilters.indexOf(value), 1);
            break;
        case "suburb":
            suburbFilters.splice(suburbFilters.indexOf(value), 1);
            break;
    }

    updateFilters();
}

function updateFilters() {
    let siteHtml = ""
    for (let i = 0; i < siteFilters.length; i++) {
        siteHtml += `<div class="pill">${siteFilters[i]} <span class="remover"><i class='fa-solid fa-xmark' onclick="removeFilter('siteName', '${siteFilters[i]}')"></i></span></div>`
    }
    let brandHtml = ""
    for (let i = 0; i < brandFilters.length; i++) {
        brandHtml += `<div class="pill">${brandFilters[i]} <span class="remover"><i class='fa-solid fa-xmark' onclick="removeFilter('brand', '${brandFilters[i]}')"></i></span></div>`
    }
    let suburbHtml = ""
    for (let i = 0; i < suburbFilters.length; i++) {
        suburbHtml += `<div class="pill">${suburbFilters[i]} <span class="remover"><i class='fa-solid fa-xmark' onclick="removeFilter('suburb', '${suburbFilters[i]}')"></i></span></div>`
    }

    document.getElementById("site-filter-display").innerHTML = siteHtml;
    document.getElementById("brand-filter-display").innerHTML = brandHtml;
    document.getElementById("suburb-filter-display").innerHTML = suburbHtml;
}

async function graphSite() {
    document.getElementById("graph").remove();
    document.querySelector("main").innerHTML += `<canvas id="graph"></canvas>`;

    //const siteName = siteFilters[0];
    const siteName = "Caltex Samford";
    
    const db = await new Promise(function(resolve) {
        _db = indexedDB.open("db");

        _db.onsuccess = function() {
            resolve(_db.result);
        }

        _db.onerror = function() {
            console.error("Cannot open DB");
        }
    });

    let sortedData = [];
    let fuelTypes = [];
    let labels = [];

    for (let i = 0; i < db.objectStoreNames.length; i++) {
        let siteId = dictionary[siteName];

        const transaction = db.transaction(db.objectStoreNames[i], "readonly");
        const objStore = transaction.objectStore(db.objectStoreNames[i]);
        
        const store = await new Promise(function(resolve) {
            //const obj = objStore.getAll();
            const obj = objStore.get(siteId);

            obj.onsuccess = function() {
                
                resolve(obj.result);
            }
    
            obj.onerror = function() {
                console.error(`Error: ${obj.error}`);
            }
        });

        const fuel = store.Fuel;

        for (let j = 0; j < Object.keys(fuel).length; j++) {
            const fuelType = fuel[Object.keys(fuel)[j]];

            let fuelNodes = {
                "Type": fuelType[Object.keys(fuelType)[0]].Type
            }

            if (fuelTypes.includes(fuelType[0].Type)) {
                for (let k = 0; k < Object.keys(sortedData).length; k++) {
                    if (sortedData[Object.keys(sortedData)[k]].Type.toString() == fuelType[0].Type.toString()) {
                        fuelNodes = sortedData[Object.keys(sortedData)[k]];
                        sortedData.splice(Object.keys(sortedData)[k], 1);
                        break;
                    }
                }
            }

            for (let k = 0; k < Object.keys(fuelType).length; k++) {
                const entry = fuelType[Object.keys(fuelType)[k]];
                const utcTime = entry.Time;
                const dateTime = utcTime.split("T");
                
                const unixDetails = {
                    "minutes": parseInt(dateTime[1].split(":")[1]),
                    "hours": parseInt(dateTime[1].split(":")[0]),
                    "date": parseInt(dateTime[0].split("-")[2]),
                    "month": parseInt(dateTime[0].split("-")[1] - 1),
                    "year": parseInt(dateTime[0].split("-")[0]),
                }

                const unixDate = Date.UTC(unixDetails.year, unixDetails.month, unixDetails.date, unixDetails.hours, unixDetails.minutes, 0, 0);

                fuelNodes[unixDate] = entry.Price;

                if (!labels.includes(unixDate.toString())) {
                    labels.push(unixDate.toString());
                }
                
                if (!fuelTypes.includes(fuelNodes["Type"])) {
                    fuelTypes.push(fuelNodes["Type"]);
                }
            }

            sortedData.push(fuelNodes);
        }
    }

    const oldLabels = labels.sort();
    labels = [];

    for (let i = 0; i < oldLabels.length; i++) {
        labels.push(new Date(parseInt(oldLabels[i])).toUTCString());
    }

    let datasets = [];
    // need to add a value for every day between values
    // or make it a scatter plot!
    for (let i = 0; i < sortedData.length; i++) {
        const currentFuel = sortedData[i];
        
        let currentSet = {
            label: currentFuel.Type,
            data: [],
            borderColor: ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple'][i]
        };

        /*for (let j = 0; j < labels.length; j++) {
            currentLabel = labels[j];

            if (Object.keys(currentFuel).includes(currentLabel)) {
                currentSet.data.push(currentFuel[currentLabel]);
            } else {
                currentSet.data.push(-1);
            }
        }*/

        for (let j = 0; j < Object.keys(currentFuel).length; j++) {
            const key = Object.keys(currentFuel)[j];
            const price = currentFuel[Object.keys(currentFuel)[j]];
            if (key != "Fuel") {
                currentSet.data.push({
                    x: key,
                    y: price
                });
            }
        }

        const dataset = currentSet.data
        let xPositions = [];
        let obj = {};
        for (let j = 0; j < dataset.length; j++) {
            if (dataset[j].x != "Type") {
                xPositions.push(parseInt(dataset[j].x));
                obj[dataset[j].x] = dataset[j].y;
            }
        }

        xPositions = xPositions.sort();

        currentSet.data = [];
        for (let j = 0; j < xPositions.length; j++) {
            currentSet.data.push({
                x: new Date(xPositions[j]).toUTCString(),
                y: obj[xPositions[j].toString()]
            })
        }

        if (true) {
            datasets.push(currentSet);
        }
    }

    let data = {
        labels: labels,
        datasets: datasets
    };

    const config = {
        type: 'line',
        data: data,
    }
    
    const myChart = new Chart(document.getElementById('graph'), config);
}

function graphFiltered() {

}

/*const ctx = document.getElementById('graph').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});*/