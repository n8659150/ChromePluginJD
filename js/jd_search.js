window.onload = function () { //document.addEventListener('DOMContentLoaded', function () 也可
var jdSearch = "http://search.jd.com/Search?keyword="; //jd search
var utfEncode = "&enc=utf-8"; //jd encode:utf-8
var sortRule = "&psort=3"
var searchBtn = document.getElementById("search_btn");

searchBtn.addEventListener("click", function() {
    var keyWord = document.getElementById("search_input").value; //get search keywords from input
	var fullUrl = jdSearch + keyWord + utfEncode + sortRule; //re-direct
	//chrome.tabs.create({url:fullUrl,selected:true}); 
	window.open(fullUrl); //与chrome.tabs.create效果相同
	});

};