$(document).ready(function() {

    appendProcessing('parents');
    appendProcessing('roots');
    appendProcessing('relationships');
    appendProcessing('processes');

    setUIEvents();

});


function setUIEvents() {

    let link = '/api/v3/workspaces/' + wsId + '/items/' + dmsId;

    $('#tab-parents'      ).click(function() {         insertParents(link, '', '', true); });
    $('#tab-roots'        ).click(function() {           insertRoots(link); });
    $('#tab-relationships').click(function() {   insertRelationships(link); });
    $('#tab-processes'    ).click(function() { insertChangeProcesses(link); });
    $('#tab-mbom'         ).click(function() {            insertMBOM(link); });

    $('.tab').first().click();

}

function insertParentsDone(id) { insertTileActions(id + '-list'); }
function changeBOMViewDone(id) { insertTableActions(id); }