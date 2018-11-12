var student = {
    person: {
        name : "Alex",
        age : 18,
        height : 172,
        d: {
            h: 3,
            g: "g"
        }
    },
    iq : 130,
    language : "russian"
};

var personOriginal = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}

function copyobject(ob1){
    var ob2 = {};
    for(var key in ob1){
        if(typeof(ob1[key]) == "object"){
            ob2[key] = copyobject(ob1[key]);
        }
        else {
            ob2[key] = ob1[key];
        }
    }
    return ob2;
}

b = copyobject(student);
c = copyobject(personOriginal);