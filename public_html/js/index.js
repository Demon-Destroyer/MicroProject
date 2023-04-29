/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var database = "SCHOOL-DB";
var table = "STUDENT-TABLE";
var baseurl = "http://api.login2explore.com:5577";
var irlurl = "/api/irl";
var imlurl = "/api/iml";
var conntoken = "90933246|-31949278364580315|90950849";

$("#rollno").focus();

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getEmpIdAsJsonObj() {
    var roll = $("#rollno").val();
    var jsonStr = {
        roll_no: roll
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#sname").val(record.name);
    $("#sclass").val(record.class);
    $("#bdate").val(record.birth_date);
    $("#add").val(record.address);
    $("#endate").val(record.enrollment_date);
}


function resetForm() {
    $("#rollno").val("");
    $("#sname").val("");
    $("#sclass").val("");
    $("#bdate").val("");
    $("#add").val("");
    $("#endate").val("");
    $("#sname").prop("disabled", true);
    $("#sclass").prop("disabled", true);
    $("#bdate").prop("disabled", true);
    $("#add").prop("disabled", true);
    $("#endate").prop("disabled", true);
    $("#rollno").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#rollno").focus();
}

function validateData() {

    var rollno = $("#rollno").val();
    var sname = $("#sname").val();
    var sclass = $("#sclass").val();
    var bdate = $("#bdate").val();
    var add = $("#add").val();
    var endate = $("#endate").val();

    if (rollno === "") {
        alert("Roll-no is Required Value");
        $("#rollno").focus();
        return "";
    }

    if (sname === "") {
        alert("Name is Required Value");
        $("#sname").focus();
        return "";
    }

    if (sclass === "") {
        alert("Class Required Value");
        $("#sclass").focus();
        return "";
    }

    if (bdate === "") {
        alert("Birthday is Required Value");
        $("#bdate").focus();
        return "";
    }

    if (add === "") {
        alert("Address Required Value");
        $("#add").focus();
        return "";
    }

    if (endate === "") {
        alert("Enrollment Date Required Value");
        $("#endate").focus();
        return "";
    }
    var jsonStrObj = {
        roll_no: rollno,
        name: sname,
        class: sclass,
        birth_date: bdate,
        address: add,
        enrollment_date: endate
    };
    return JSON.stringify(jsonStrObj);
}

function getEmp() {
    var empIdJsonObj = getEmpIdAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(conntoken, database, table, empIdJsonObj);

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, baseurl, irlurl);
    jQuery.ajaxSetup({async: true});

    if (resJsonObj.status === 400) {
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#sname").prop("disabled", false);
        $("#sclass").prop("disabled", false);
        $("#bdate").prop("disabled", false);
        $("#add").prop("disabled", false);
        $("#endate").prop("disabled", false);

        $("#sname").focus();
    } else if (resJsonObj.status === 200) {
        $("#rollno").prop("disabled", true);
        fillData(resJsonObj);

        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#sname").prop("disabled", false);
        $("#sclass").prop("disabled", false);
        $("#bdate").prop("disabled", false);
        $("#add").prop("disabled", false);
        $("#endate").prop("disabled", false);
        $("#sname").focus();
    }
}

function saveData() {
    var jsonStrObj = validateData();

    if (jsonStrObj === "") {
        return "";
    }

    var putRequest = createPUTRequest(conntoken, jsonStrObj, database, table);
    alert(putRequest);

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, baseurl, imlurl);
    alert(JSON.stringify(resJsonObj));
    jQuery.ajaxSetup({async: true});

    resetForm();
    $("#rollno").focus();
}

function changeData() {
    $("#change").prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(conntoken, jsonChg, database, table, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, baseurl, imlurl);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $("#rollno").focus();
}


