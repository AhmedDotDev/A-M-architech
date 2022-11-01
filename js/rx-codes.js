// JavaScript Document
".company":{rx:/.{2}/,target:'input'},
".address":{rx:/.{2}/,target:'input'},
".city":{rx:/.{2}/,target:'input'},
".state":{rx:/.{2}/,target:'input'},
".country":{rx:/.{2}/,target:'input'},
".zipcode":{rx:/.{2}/,target:'input'},
".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:'input'},
".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".fax":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:'input'},
".contactby":{rx:/.{2}/,target:'select'},
".programstart":{rx:/.{2}/,target:'input'},
".programend":{rx:/.{2}/,target:'input'},
".numberofattendees":{rx:/.{2}/,target:'input'},
".hotel":{rx:/.{2}/,target:'input'},
".servicesneeded":{rx:/.{2}/,target:'select'},
".groupprofile":{rx:/.{20}/,target:'textarea'},
".programoverview":{rx:/.{20}/,target:'textarea'},
".additionalcomments":{rx:/.{20}/,target:'textarea'}