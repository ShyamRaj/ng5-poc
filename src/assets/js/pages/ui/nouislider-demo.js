!function(e) {
    "use strict";
    var t= {};
    e(document).ready(function() {
            return e("#noui-connect").length&&t.connect(), e("#noui-html5").length&&t.html5(), e("#noui-slider1").length&&t.lock(), !1
        }
    ),
        t= {
            connect: function() {
                var e=document.getElementById("noui-connect");
                noUiSlider.create(e, {
                        start:[20, 80], connect:!1, range: {
                            min: 0, max: 100
                        }
                    }
                );
                var t=document.createElement("div"),
                    a=e.querySelector(".noUi-base");
                return t.className+="connect",
                    a.appendChild(t),
                    e.noUiSlider.on("update",
                        function(e,
                                 a,
                                 n,
                                 i,
                                 r) {
                            var o=r[a];
                            1===a&&(o=100-o), t.style[a?"right": "left"]=o+"%"
                        }
                    ),
                    !1
            }
            ,
            html5:function() {
                for(var e=document.getElementById("noui-select"), t=-20;
                    40>=t;
                    t++) {
                    var a=document.createElement("option");
                    a.text=t, a.value=t, e.appendChild(a)
                }
                var n=document.getElementById("noui-html5");
                noUiSlider.create(n,
                    {
                        start:[10, 30], connect:!0, range: {
                        min: -20, max: 40
                    }
                    }
                );
                var i=document.getElementById("noui-input-number");
                return n.noUiSlider.on("update",
                    function(t,
                             a) {
                        var n=t[a];
                        a?i.value=n: e.value=Math.round(n)
                    }
                ),
                    e.addEventListener("change",
                        function() {
                            n.noUiSlider.set([this.value, null])
                        }
                    ),
                    i.addEventListener("change",
                        function() {
                            n.noUiSlider.set([null, this.value])
                        }
                    ),
                    !1
            }
            ,
            lock:function() {
                function e(e, t) {
                    if(a) {
                        var r=i===t?0: 1, o=r?0: 1;
                        return e-=n[o]-n[r], t.noUiSlider.set(e), !1
                    }
                }
                function t() {
                    return n=[Number(i.noUiSlider.get()), Number(r.noUiSlider.get())], !1
                }
                var a=!1,
                    n=[60,
                        80],
                    i=document.getElementById("noui-slider1"),
                    r=document.getElementById("noui-slider2"),
                    o=document.getElementById("noui-lockbutton"),
                    l=document.getElementById("noui-slider1-span"),
                    s=document.getElementById("noui-slider2-span");
                return o.addEventListener("click",
                    function() {
                        a=!a, this.textContent=a?"unlock": "lock"
                    }
                ),
                    noUiSlider.create(i,
                        {
                            start:60, animate:!1, range: {
                            min: 50, max: 100
                        }
                        }
                    ),
                    noUiSlider.create(r,
                        {
                            start:80, animate:!1, range: {
                            min: 50, max: 100
                        }
                        }
                    ),
                    i.noUiSlider.on("update",
                        function(e,
                                 t) {
                            l.innerHTML=e[t]
                        }
                    ),
                    r.noUiSlider.on("update",
                        function(e,
                                 t) {
                            s.innerHTML=e[t]
                        }
                    ),
                    i.noUiSlider.on("change",
                        t),
                    r.noUiSlider.on("change",
                        t),
                    i.noUiSlider.on("slide",
                        function(t,
                                 a) {
                            e(t[a], r)
                        }
                    ),
                    r.noUiSlider.on("slide",
                        function(t,
                                 a) {
                            e(t[a], i)
                        }
                    ),
                    !1
            }
        }
}
(jQuery);


/****************************************************
                    nonlinear
 ****************************************************/


var nonLinearSlider = document.getElementById('noui-nonlinear');

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    start: [ 500, 4000 ],
    range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [ 0 ],
        '10%': [ 500, 500 ],
        '50%': [ 4000, 1000 ],
        'max': [ 10000 ]
    }
});
var nodes = [
    document.getElementById('noui-lower-value'), // 0
    document.getElementById('noui-upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
    nodes[handle].innerHTML = values[handle] + ', ' + positions[handle].toFixed(2) + '%';
});

/****************************************************
                    Soft Limit
 ****************************************************/

var softSlider = document.getElementById('noui-soft');

noUiSlider.create(softSlider, {
    start: 50,
    range: {
        min: 0,
        max: 100
    },
    pips: {
        mode: 'values',
        values: [20, 80],
        density: 4
    }
});
softSlider.noUiSlider.on('change', function ( values, handle ) {
    if ( values[handle] < 20 ) {
        softSlider.noUiSlider.set(20);
    } else if ( values[handle] > 80 ) {
        softSlider.noUiSlider.set(80);
    }
});