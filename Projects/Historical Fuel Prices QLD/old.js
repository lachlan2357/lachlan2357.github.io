function getDataAll() {
    const fileRequest = new XMLHttpRequest();
    fileRequest.open("GET", `data/info.txt`);
    fileRequest.send();

    fileRequest.onload = function() {
        if (fileRequest.status == 200) {
            getDataAllFirstMid(JSON.parse(fileRequest.responseText));

        } else if (fileRequest.status == 404) {
            console.error("Request Error 404: Could not find target");
        }
    }

    fileRequest.onerror = function() {
        console.error("Request Error: Network issues")
    }
    
    fileRequest.onprogress = function(e) {
        if (e.lengthComputable) {
            console.log(`${e.loaded} B of ${e.total} B loaded!`)
          } else {
            console.log(`${e.loaded} B loaded!`)
          }
    }
}

function getDataAllFirstMid(info) {
    const fileNames = info.fileNames;

    const dbRequest = indexedDB.open("db", 1);

    dbRequest.onsuccess = function() {
        db = dbRequest.result;

        //change this to get all stores and all id's to use instead of just one set. some places could appear/disappear and we need to account for them
        const transaction = db.transaction(fileNames[0], "readonly");
        const objStore = transaction.objectStore(fileNames[0]);
        const objs = objStore.getAll();

        objs.onsuccess = function() {
            const allData = objs.result;
            let distinctData = {
                "Name": [],
                "Brand": [],
                "Suburb": [],
            }
    
            for (i = 0; i < allData.length; i++) {
                if (!distinctData.Name.includes(allData[i].Name)) {
                    distinctData.Name.push(allData[i].Name);
                }
                if (!distinctData.Brand.includes(allData[i].Brand)) {
                    distinctData.Brand.push(allData[i].Brand);
                }
                if (!distinctData.Suburb.includes(allData[i].Suburb)) {
                    distinctData.Suburb.push(allData[i].Suburb);
                }
            }

            delete(allData);

            for (i = 0; i < distinctData.Name.length; i++) {
                document.getElementById("SiteNames").innerHTML += `<option>${distinctData.Name[i]}</option>`
            }

            for (i = 0; i < distinctData.Brand.length; i++) {
                document.getElementById("Brands").innerHTML += `<option>${distinctData.Brand[i]}</option>`
            }

            for (i = 0; i < distinctData.Suburb.length; i++) {
                document.getElementById("Suburbs").innerHTML += `<option>${distinctData.Suburb[i]}</option>`
            }
        }
    }

    dbRequest.onupgradeneeded = function() {
        db = dbRequest.result;
        for (i = 0; i < fileNames.length; i++) {
            db.createObjectStore(fileNames[i], {autoIncrement: true});
        }

        getDataAllSecondMid(fileNames);
    }

    dbRequest.onerror = function() {
        console.error(dbRequest.error);
    }
}

function getDataAllSecondMid(fileNames) {
    for (i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[0];

        const request = new XMLHttpRequest();
        request.open("GET", `data/${fileName}.csv`);
        request.send();

        request.onload = function() {
            if (request.status == 200) {
                getDataAllEnd(request.responseText, fileName);
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
    }
}

function getDataAllEnd(data, fileName) {
    rows = data.split("\n");

    headings = rows[0].replace("\r", "").split(",");
    rows = rows.splice(1);

    for (i = 0; i < rows.length; i++) {
        // an edge case becuase thank you qld government
        if (rows[i].includes("Caltex William St, Rockhampton")) {
            rows[i] = rows[i].replace("Caltex William St, Rockhampton", "Caltex William St Rockhampton");
        }

        rows[i] = rows[i].replace("\r", "").split(",");
    }

    let stationInfo = {};
    for (i = 0; i < rows.length; i++) {
        const currentData = rows[i];
        const id = currentData[headings.indexOf("SiteId")];

        if (id == "") {
            continue;
        }

        let info = {
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

        const fuelType = currentData[headings.indexOf("Fuel Type")];
        const price = currentData[headings.indexOf("Price")];
        const time = currentData[headings.indexOf("TransactionDateutc")];

        info["Fuel"][fuelType] = {
            "Fuel Type": fuelType,
            "Price": price,
            "time": time
        };
        stationInfo[id] = info;
    }

    const dbRequest = indexedDB.open("db", 1);

    dbRequest.onsuccess = function() {
        const db = dbRequest.result;
        const transaction = db.transaction(fileName, "readwrite");
        const objStore = transaction.objectStore(fileName);

        const keys = Object.keys(stationInfo);
        for (i = 0; i < keys.length; i++) {
            const obj = stationInfo[keys[i]];

            objStore.add(obj);
        }
    }
}

function dbAddAllItems(db, data, fileName) {
    const transaction = db.transaction(fileName, "readwrite");
    const objStore = transaction.objectStore(fileName);

    const keys = Object.keys(data);
    for (i = 0; i < keys.length; i++) {
        const info = data[keys[i]];
        objStore.add(info);
    }
}

function displayData(items) {
    
}

