// returns a promise
// apiname e.g. "/api/get" or "/api/set"
// request e.g. { "key" : <> }
function request_promise(url, request)
{
    let self = this;

    return new Promise(function(resolve, reject) {

        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    let response = JSON.parse(xmlhttp.response);
                    if (response["result-code"] == 0) {
                        resolve(response);
                    } else {
                        reject(new Error(response["result-message"]));
                    }
                } else {
                    reject(new Error("network error"));
                }
            }
        };

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // this header must be set by the browser. the standard says a browser should
        // terminate a request if Content-length or Connection are specified.
        //    xmlhttp.setRequestHeader("Content-length", data.length);
        xmlhttp.send(JSON.stringify(request));
    });
}

function request_promise_raw(getpost, url, headers, request)
{
    let self = this;

    return new Promise(function(resolve, reject) {

        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    let response = JSON.parse(xmlhttp.response);
                    resolve(response);
                } else {
                    reject(new Error("network error"));
                }
            }
        };

        xmlhttp.open(getpost, url, true);

        for (let i = 0; i < headers.length; i++) {
            xmlhttp.setRequestHeader(headers[i].name, headers[i].value);
        }

        xmlhttp.send(request);
    });
}
