async function domessage(s)
{
    let okays = [ "Okay",
                  "Shucks.",
                  "That's a kick in the pants.",
                  "I want my money back!",
                  "Try turning it off and back on.",
                  "You get what you paid for.",
                  "Perfection is overrated.",
                  "Inconceivable!",
                  "I want a pony.",
                  "It was like that when I got here!",
                  "It's not you, it's me.",
                  "The perfect is the enemy of the buggy.",
                  "Fantastic!"
                ];

    let del = document.getElementById("dialog");
    del.style.display = "block";
    document.getElementById("dialog_message").innerHTML = s;
    document.getElementById("dialog_okay").value = okays[parseInt(Math.random() * okays.length)];
    await new Promise(function(resolve, reject) {
        document.getElementById("dialog_okay").onclick = function() { resolve(true); };
    });
    del.style.display = "none";
}

async function generate()
{
    let request = { "auth" : { "user" : "guest",
                               "password" : "guest"
                             },
                    "latex" : document.getElementById("form_latex").value,
                    "resolution" : parseInt(document.getElementById("form_resolution").value),
                    "color" : document.getElementById("form_color").value.replace("#","") };

    try {
        let response = await request_promise(document.location.origin + "/api/convert", request);
        document.getElementById("img_output").src = response["url"];

        // add to history
        if (1) {
            let h = { "request" : request,
                      "url" : response.url,
                      "time" : new Date().getTime()
                    };
            delete h.request.auth; // don't need this.

            let hs = JSON.parse(localStorage["query_history_v2"] || "[]");

            // if this request is already in the history, delete it. (We will
            // add it again at the end in a moment.)
            for (let i = 0; i < hs.length; i++) {
                if (hs[i].url == h.url) {

                    hs.splice(i, 1); // delete it
                    break;
                }
            }

            hs.push(h);

            // prevent history from getting silly long.
            let maxsz = 200;
            if (hs.length > maxsz) {
                hs.splice(0, hs.length - maxsz);
            }

            localStorage["query_history_v2"] = JSON.stringify(hs);
        }

    } catch (e) {
        let m = e["message"];
        m = m.replace(/\n+/g, "<br>\n");

        domessage(m);
        console.log(e);
    }
}

async function recognize(pngurl)
{
    let request = { "auth" : { "user" : "guest",
                               "password" : "guest"
                             },
                    "png" : pngurl
                  };

    try {
        let response = await request_promise(document.location.origin + "/api/recognize", request);
        console.log(response);

        document.getElementById("form_latex").value = response["latex"];
        document.getElementById("form_resolution").value = response["resolution"];
        document.getElementById("form_color").value = "#"+response["color"];

        generate();
    } catch (e) {
        domessage(e["message"]);
        console.log(e);
    }
}

async function setup()
{
    let rebuild_history = null;

    if (true) {
        let show_history_plus = 20;
        let show_history = show_history_plus;

        let hidden = true;
        let grid_el = document.getElementById("history_grid");

        rebuild_history = async function()
        {
            if (hidden)
                return;

            let cache = {};

            while (grid_el.childNodes.length > 0) {
                let e = grid_el.removeChild(grid_el.childNodes[0]);
                cache[e.url] = e;
            }

            let hs = JSON.parse(localStorage["query_history_v2"]);

            let h1 = hs.length - 1;
            let h0 = Math.max(0, h1 - show_history + 1);

            for (let i = h1; i >= h0; i--) {
                let h = hs[i];

                let el = null;
                if (cache.hasOwnProperty(h.url)) {
                    // reuse images that have already been loaded!
                    el = cache[h.url];
                } else {
                    // create a new one...
                    el = document.createElement("span");

                    let imgel = document.createElement("img");
                    el.appendChild(imgel);
                    imgel.src = h.url;
                    imgel.className = "griditem";

                    el.onclick = function() {
                        document.getElementById("form_latex").value = h.request.latex;
                        document.getElementById("form_resolution").value = h.request.resolution;
                        document.getElementById("form_color").value = "#"+h.request.color;
                        document.getElementById("img_output").src = h.url;
                    };

                    // add a drop shadow to images that are very light
                    // colored.
                    let c = parseInt("0x"+h.request.color.substring(0,2)) +
                        parseInt("0x"+h.request.color.substring(2,4)) +
                        parseInt("0x"+h.request.color.substring(4,6));

                    if (c > 220*3)
                        el.style.filter = "drop-shadow(0px 0px 1px #808080)";

                    el.url = h.url;
                }

                grid_el.appendChild(el);
            }

            if (show_history < hs.length) {
                el = document.createElement("span");
                el.innerHTML = "(show more)";
                el.className = "showmore";

                el.onclick = async function() {
                    show_history += show_history_plus;
                    await rebuild_history();
                    window.scrollTo(0,document.body.scrollHeight);
                };

                grid_el.appendChild(el);
            }
        }

        document.getElementById("view_history").onclick = async function(e) {

            // if we *were* hidden, we aren't any more! (TODO:
            // eventually add logic to re-hide?)
            hidden ^= true;

            document.getElementById("history").style.display = hidden ? "none" : "block";

            document.getElementById("view_history").innerHTML = hidden ? "show history" : "hide history";

            if (!hidden) {
                let hs = JSON.parse(localStorage["query_history_v2"]);

/*                if (show_history < hs.length - 1) {
                    document.getElementById("view_history").innerHTML = "show more history";
                } else {
                    document.getElementById("view_history").innerHTML = "end of history";
                }
*/

                await rebuild_history();
                window.scrollTo(0,document.body.scrollHeight);
            }
        };
    }

    document.getElementById("convert_button").onclick = async function () { await generate();
                                                                      rebuild_history();
                                                                    }

    // Not yet working.
    if (true) {
        document.onpaste = function(event){
            var items = (event.clipboardData || event.originalEvent.clipboardData).items;

            for (index in items) {
                var item = items[index];
                if (item.kind === 'file') {
                    var blob = item.getAsFile();
                    var reader = new FileReader();
                    reader.onload = function(event){
                        recognize(event.target.result);
                    }; // data url!
                    reader.readAsDataURL(blob);
                }
            }
        }
    }

    // pre-populate the text fields
    document.getElementById("form_latex").value = "y = \\sum_{x=0}^{10} x^2";
    document.getElementById("form_resolution").value = "600";
    document.getElementById("form_color").value = "#000000";

    if (localStorage["query_history_v2"] != undefined) {
        let hs = JSON.parse(localStorage["query_history_v2"]);
        let h = hs[hs.length - 1];
        document.getElementById("form_latex").value = h.request.latex;
        document.getElementById("form_resolution").value = h.request.resolution;
        document.getElementById("form_color").value = "#" + h.request.color;
    }

    // generate the current equation
    document.getElementById("convert_button").onclick();

/*    document.getElementById("color_swatch").onclick = function() {
        document.getElementById("color_chooser").style.display = "block";

    };
*/
}
