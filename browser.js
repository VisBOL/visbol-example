
var SBOLDocument = require('sboljs')

var visbol = require('visbol')
var sbolv = require('visbol/font/sbolv/main')

fetch('toggleswitch.xml')
    .then((file) => file.text())
    .then((xml) => {

    SBOLDocument.loadRDF(xml, function(err, sbolDoc) {

        var design = new visbol.Design({
            element: document.getElementById('design'),
            font: sbolv
        })

        var cd = sbolDoc.componentDefinitions[0]

        design.setDisplayList(
            visbol.getDisplayList.getDisplayList(cd)
        )



    })

})

