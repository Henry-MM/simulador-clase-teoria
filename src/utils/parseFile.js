const getFileContentAsJSON = function (file) {

    if (
        !(file instanceof File)
        || file.type !== "application/json"
    ) return null;

    const reader = new FileReader(file);

    const promise = new Promise((resolve, reject) => {

        reader.onload = function(evt) {

            const resultText = evt.target.result;
            const resultJSON = JSON.parse(resultText);

            if (typeof resultJSON != 'object') 
                reject ("could not parse the file as JSON")
            
            resolve (resultJSON);
        }    

        reader.readAsText (file, 'UTF-8');
    });

    return promise;
}

export {
    getFileContentAsJSON
}