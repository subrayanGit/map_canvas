jQuery(document).ready(function(r) {
    var a, q, f, g, d, b, e, c, h, l, m, i, india;
    location.protocol === 'file:' && alert('This demo does not work with the file protocol due to browser security restrictions.'), l = {
        lat: 40.689,
        lng: -74.046
    }, m = 22, i = !1, window.addEventListener("load", function() {
        a = new Earth(document.getElementById('myearth'), {
            location: {
                lat: 12,
                lng: -3
            },
            zoom: .925,
            draggable: !1,
            lightAmbience: .65,
            light: 'sun',
            sunDirection: {
                x: -.2,
                y: .3
            },
            lightIntensity: .55,
            shininess: .12,
            mapSeaColor: '#dfd9d4',
            mapLandColor: '#765f4f',
            mapBorderColor: '#d2aa8a',
            mapBorderWidth: .6
        }), a.addEventListener("drawtexture", function() {
            var c, b, d, e;
            a.mapContext.globalCompositeOperation = 'multiply', c = 5, b = a.mapCanvas.height / c;
            for (d = 0; d < c; d++)
                for (e = 0; e < c * 2; e++) a.mapContext.drawImage(document.getElementById('cork'), 0, 0, 256, 256, e * b, d * b, b, b);
            a.mapContext.globalCompositeOperation = 'source-over', a.mapContext.drawImage(document.getElementById('sticker'), 0, 0, 254, 558, a.mapCanvas.width * .01, a.mapCanvas.height * .38, a.mapCanvas.width * .05, a.mapCanvas.width * .05 * (558 / 254))
        }), a.addEventListener("ready", function() {
            window.addEventListener('scroll', n), f = this.addMarker({
                location: {
                    lat: 40.4380637,
                    lng: -3.7497477
                },
                mesh: ["Flag3", "Needle"],
                color: 16718624,
                scale: 1.35,
                hotspot: !0,
                hotspotRadius: .7,
                hotspotHeight: 1.2,
                lookAt: l
            }), f.tip = this.addOverlay({
                location: f.location,
                content: 'Spain',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), f.addEventListener("mouseover", j), f.addEventListener("mouseout", k), f.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.3), this.animate('rotationX', 40), this.animate('scale', 1.62)
            }, f.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('scale', 1.35)
            }, 
			india = this.addMarker({
                location: {
                    lat: 5.4380637,
                    lng: -61.7497477
                },
                mesh: ["Pin", "Needle"],
                color: 16718624,
                scale: 1.35,
                hotspot: !0,
                hotspotRadius: .7,
                hotspotHeight: 1.2,
                lookAt: l
			}),
			india.tip = this.addOverlay({
                location: india.location,
                content: 'Brazil',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), india.addEventListener("mouseover", j), india.addEventListener("mouseout", k), india.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.3), this.animate('rotationX', 40), this.animate('scale', 1.62)
            }, india.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('scale', 1.35)
            }, 
			
			d = this.addMarker({
                location: {
                    lat: 34.0311504,
                    lng: -118.3289974
                },
                mesh: ["Flag3", "Needle"],
                color: 2443775,
                scale: 1.25,
                hotspot: !0,
                hotspotRadius: .7,
                hotspotHeight: 1.4
            }), d.tip = this.addOverlay({
                location: d.location,
                content: 'California',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), d.addEventListener("mouseover", j), d.addEventListener("mouseout", k), d.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.2), this.animate('rotationX', -30), this.animate('rotationZ', 25), this.animate('scale', 1.5)
            }, d.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('rotationZ', 0), this.animate('scale', 1.25)
            }, b = this.addMarker({
                location: {
                    lat: 21.3198546,
                    lng: -157.9353933
                },
                mesh: ["Pin", "Needle"],
                color: 3192863,
                scale: 1.3,
                hotspot: !0
            }), b.tip = this.addOverlay({
                location: b.location,
                content: 'Hawaii',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), b.addEventListener("mouseover", j), b.addEventListener("mouseout", k), b.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.25), this.animate('rotationX', -18), this.animate('rotationZ', -16), this.animate('scale', 1.55)
            }, b.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('rotationZ', 0), this.animate('scale', 1.3)
            }, e = this.addMarker({
                location: {
                    lat: 35.6693859,
                    lng: 139.6009549
                },
                mesh: ["Pin", "Needle"],
                color: 16718624,
                scale: 1.3,
                hotspot: !0
            }), e.tip = this.addOverlay({
                location: e.location,
                content: 'Japan',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), e.addEventListener("mouseover", j), e.addEventListener("mouseout", k), e.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.2), this.animate('rotationX', -20), this.animate('rotationZ', 20), this.animate('scale', 1.55)
            }, e.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('rotationZ', 0), this.animate('scale', 1.3)
            }, c = this.addMarker({
                location: {
                    lat: 13.7248934,
                    lng: 100.492684
                },
                mesh: ["Flag", "Needle"],
                color: 2443775,
                scale: 1.3,
                hotspot: !0,
                hotspotRadius: .7,
                hotspotHeight: 1.2,
                rotationY: 25,
                rotationX: -15
            }), c.tip = this.addOverlay({
                location: c.location,
                content: 'Thailand',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay'
            }), c.addEventListener("mouseover", j), c.addEventListener("mouseout", k), c.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1), this.animate('rotationX', -55), this.animate('rotationZ', 20), this.animate('scale', 1.55)
            }, c.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', -15), this.animate('rotationZ', 0), this.animate('scale', 1.3)
            }, h = this.addMarker({
                location: {
                    lat: -1.3030364,
                    lng: 36.7771854
                },
                mesh: ["Pin2", "Needle"],
                color: 3192863,
                scale: 1.25,
                hotspot: !0,
                hotspotRadius: .7,
                hotspotHeight: 1.4
            }), h.tip = this.addOverlay({
                location: h.location,
                content: 'Kenya',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay tip-down'
            }), h.addEventListener("mouseover", j), h.addEventListener("mouseout", k), h.activate = function() {
                this.stopAllAnimations(), this.animate('offset', 1.25), this.animate('rotationX', 40), this.animate('scale', 1.5)
            }, h.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('scale', 1.25)
            }, this.addLine({
                locations: [f.location, l],
                color: 15537943,
                width: 1.25,
                offsetFlow: 1,
                dashed: !0,
                dashSize: .4,
                dashRatio: .5,
                dashOffset: .09
            }), this.addLine({
                polyLine: !0,
                locations: [l, {
                    lat: 43.091239,
                    lng: -79.1718307
                }, {
                    lat: 41.6190188,
                    lng: -88.1650261
                }, {
                    lat: 41.6915624,
                    lng: -99.9371189
                }, {
                    lat: 39.7862819,
                    lng: -105.6015808
                }, {
                    lat: 39.0098291,
                    lng: -112.6382665
                }, {
                    lat: 36.185957,
                    lng: -115.4224017
                }, d.location],
                color: "black",
                width: 1.25
            }), this.addLine({
                polyLine: !0,
                locations: [d.location, {
                    lat: 31.163160867378515,
                    lng: -119.50505949419858
                }, {
                    lat: 29.377335348017763,
                    lng: -120.23347044155403
                }, {
                    lat: 27.987920645411283,
                    lng: -120.97509940385386
                }, {
                    lat: 24.818344640116504,
                    lng: -123.7714191048682
                }, {
                    lat: 23.096585391744945,
                    lng: -126.27515241387691
                }, {
                    lat: 21.033975310374625,
                    lng: -129.5042878834362
                }, {
                    lat: 19.518891916312576,
                    lng: -133.2488568815472
                }, {
                    lat: 18.505240294212037,
                    lng: -137.3071707879784
                }, {
                    lat: 17.795533460575584,
                    lng: -143.7123111588744
                }, {
                    lat: 18.0782752401994,
                    lng: -147.03263627747856
                }, {
                    lat: 18.94030015038251,
                    lng: -149.2445920470761
                }, {
                    lat: 20.84908472810411,
                    lng: -152.3034150012591
                }, {
                    lat: 21.653851037350858,
                    lng: -155.1422991629944
                }, b.location],
                color: 3561933,
                width: 1.25
            }), this.addLine({
                locations: [b.location, e.location],
                color: 15537943,
                width: 1.25,
                offsetFlow: 1,
                dashed: !0,
                dashSize: .4,
                dashRatio: .5,
                dashOffset: .105
            }), this.addLine({
                polyLine: !0,
                locations: [e.location, {
                    lat: 32.78213447865391,
                    lng: 136.12453232511197
                }, {
                    lat: 30.99334320817764,
                    lng: 132.8916545259063
                }, {
                    lat: 30.04447218420276,
                    lng: 130.3206330641471
                }, {
                    lat: 29.48140910284833,
                    lng: 127.5047189951175
                }, {
                    lat: 27.80128581092784,
                    lng: 122.55283848847692
                }, {
                    lat: 26.162065164801025,
                    lng: 120.97170608269381
                }, {
                    lat: 24.4217894019055,
                    lng: 119.6305602245371
                }, {
                    lat: 23.007116918998207,
                    lng: 117.8398367778564
                }, {
                    lat: 22.42252630391176,
                    lng: 114.39895578860998
                }, {
                    lat: 22.500773152287213,
                    lng: 113.52601819482305
                }, {
                    lat: 21.585517427462356,
                    lng: 113.27384587875595
                }, {
                    lat: 19.67029099563807,
                    lng: 113.24969787432671
                }, {
                    lat: 17.85015961554018,
                    lng: 112.44608934829685
                }, {
                    lat: 14.874583708900815,
                    lng: 111.46353892828185
                }, {
                    lat: 11.308628561204666,
                    lng: 110.27624534701265
                }, {
                    lat: 9.421967600692518,
                    lng: 108.24923243358782
                }, {
                    lat: 7.262476614034991,
                    lng: 106.14183029100957
                }, {
                    lat: 6.929659710099698,
                    lng: 104.295969360431
                }, {
                    lat: 7.463023903932724,
                    lng: 102.28354469453384
                }, {
                    lat: 9.398907542411939,
                    lng: 100.20496026033567
                }, {
                    lat: 10.376634430500824,
                    lng: 100.57506073256488
                }, c.location],
                color: 3561933,
                width: 1.25
            }), this.addLine({
                locations: [c.location, h.location],
                color: 15537943,
                width: 1.25,
                offsetFlow: 1,
                dashed: !0,
                dashSize: .4,
                dashRatio: .5,
                dashOffset: .09
            }), n()
        });
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            this.readyState == 4 && (Earth.addMesh(this.responseText), g = a.addMarker({
                mesh: ["StatueOfLiberty"],
                color: '#95c3d4',
                shininess: .5,
                location: l,
                scale: .01,
                hotspot: !0,
                hotspotRadius: .6,
                hotspotHeight: 1.8,
                offset: 1,
                rotationY: 50
            }), g.animate('scale', 1.5, {
                duration: 200
            }), g.animate('offset', 0, {
                duration: 800,
                easing: 'bounce'
            }), g.tip = a.addOverlay({
                location: l,
                content: 'New York',
                depthScale: .25,
                elementScale: .5,
                visible: !1,
                className: 'tip-overlay',
                transform: 'translate(-50%, 2em)'
            }), g.addEventListener("mouseover", j), g.addEventListener("mouseout", k), g.activate = function() {
                this.stopAllAnimations(), this.animate('offset', .7), this.animate('rotationX', -40), this.animate('rotationY', 0), this.animate('scale', 1.65)
            }, g.deactivate = function() {
                this.stopAllAnimations(), this.animate('offset', 0), this.animate('rotationX', 0), this.animate('rotationY', 50), this.animate('scale', 1.5)
            }, n())
        }, i.open("GET", 'world-trip/statue-of-liberty.obj', !0), i.send()
    });

    function o() {
        return document.body.scrollTop ? document.body.scrollTop / (document.body.scrollHeight - window.innerHeight) : document.documentElement.scrollTop ? document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) : 0
    }

    function n() {
        var l, k, j, m;
        o() > 0 && document.body.classList.add('scrolled'), l = o() * -320 - 4, a.location = {
            lat: 12,
            lng: l
        }, k = [f, g, d, b, e, c, h], j = !1;
        for (m in k)
            if (p(l, k[m])) {
                j = k[m];
                break
            } j ? j != i && (i && i.deactivate(), j.activate()) : i && i.deactivate(), i = j
    }

    function p(a, b) {
        return !!b && (Math.abs(a - b.location.lng) > 180 && (a = a < 0 ? a + 360 : a - 360), a > b.location.lng - m && a < b.location.lng + m)
    }

    function j() {
        this.tip.visible = !0
    }

    function k() {
        this.tip.visible = !1
    }
})