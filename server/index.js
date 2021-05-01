const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
process.on('uncaughtException', function (error) {
    console.log(error.stack);
});
var router = express.Router()

var url = require('url');
const {nextTick} = require('process');

const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
var tempid = ""
app.post("/api/signin", (req, res) => {
    //console.log("1")
    tempid = req.body.email;
    const emailid = req.body.email;
    const password = req.body.password;

    db.getConnection(function (err) {

        //console.log("connected")
        db
            .query("SELECT ls_pass FROM student_login_details where ls_usern=? AND ls_pass=?", [
                emailid, password
            ], function (err, result) {

                if (result.length > 0) {
                    //console.log("match")
                    res.send('valid')
                    res.end()
                } else {
                    res.send("mismatch")
                }
                if (err) {
                    print("retrievel error")
                }

            });

        app.post("/api/changeform", (req, res) => {
            //console.log("1")
            const cename = req.body.cename;
            const cecoursecode = req.body.cecoursecode;
            const dename = req.body.dename;
            const decoursecode = req.body.decoursecode;

            db.getConnection(function (err) {

                //console.log("connected")
                db
                    .query("insert into electivechange values(?,?,?,?,?)", [
                        emailid, cename, cecoursecode, dename, decoursecode
                    ], function (err, result) {

                        if (err) {
                            res.send('invalid')

                            res.end()
                            return next(err)
                        }
                        res.send('valid')
                        res.end()

                    });
            });

        })

    })
    app.get("/api/getele", (req, res) => {
        const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

        db.getConnection(function (err) {
            var x1 = tempid.split("@")[0]
            var depart = x1
                .split(".")[2]
                .slice(2, 5)
                .toUpperCase()
            var yr = 21 - parseInt(x1.split(".")[2].slice(5, 7))

            db.query("SELECT electivename FROM dept_elective WHERE department=? AND courseyear=?", [
                depart, yr
            ], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn[0]
                    }
                    x.push(state)
                }

                res.send(x)
                res.end()

            });
        });

    })

    app.get("/api/getcc", (req, res) => {
        const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

        db.getConnection(function (err) {

            console.log(req.query)
            db.query("SELECT coursecode FROM dept_elective WHERE electivename=? ", [
                req.query.name
            ], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn[0]
                    }
                    x.push(state)
                }
                // console.log(x)

                res.send(x)
                res.end()

            });
        });

    })

    app.get("/api/getname", (req, res) => {
        const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

        db.getConnection(function (err) {
            var x1 = tempid.split("@")[0]
            console.log(x1)
            db.query("SELECT name FROM student_details WHERE rno=?", [x1], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                var x1 = (JSON.parse(JSON.stringify(result)))
                console.log(Object.values(x1)[0].name)
                res.send(Object.values(x1)[0].name)
                res.end()

            });
        });

    })
    app.post("/api/submitfeedback", (req, res) => {
        console.log("1")
        var x1 = tempid.split("@")[0]
        const Rollno = x1;
        const electivename = req.body.electivename;
        const desc = req.body.desc;
        const desc1 = req.body.desc1;
        const Rating = req.body.Rating;

        console.log(electivename);
        console.log(Rating);

        db.getConnection(function (err) {

            console.log("connected")

            db.query("insert into student_feedback values(?,?,?,?,?)", [
                Rollno, electivename, desc, desc1, Rating
            ], function (err, result) {

                if (err) {
                    res.send('invalid')

                    res.end()
                    return next(err)
                }

                res.send('valid')
                res.end()

            });
        });

    })
})
app.post("/api/deptformcol", (req, res) => {
    //console.log("1") const  array= req.body.array1;
    const elective = req.body.array1;
    //console.log("array element",elective);
    let n = elective.length;

    // console.log(vals);}
    db.getConnection(function (err) {

        console.log("connected")

        for (let i = 0; i < n; i++) {
            let vals = Object.values(elective[i]);
            db.query("insert into dept_elective(department,electivename,coursecode,courseyear,max,min," +
                    "descr,cm) values(?,?,?,?,?,?,?,?)",
            vals, function (err, result) {

                if (err) {
                    res.send('invalid')

                    res.end()
                    return next(err)
                }
                res.send('valid')
                res.end()

            });
        }

    });

})

app.post("/api/studentformcol", (req, res) => {
    //console.log("1") const  array= req.body.array1;
    const name = req.body.name;
    var temp = "";
    temp = tempid;
    const rno = temp.slice(0, 16);
    console.log(tempid);
    const sec = req.body.sec;
    const pref = req.body.pref;
    console.log("array element", pref);
    let n = pref.length;

    // console.log(vals);}
    db.getConnection(function (err) {

        console.log("connected")

        let refs = "valid"
        for (let i = 0; i < n; i++) {
            let vals = Object.values(pref[i]);

            console.log(vals)
            db.query("insert into student_elective values(?,?,?,?,?)", [
                name, rno, sec, i + 1,
                vals[1]
            ], function (err, result) {

                if (err) {
                    refs = "invalid"
                }

            });
        }
        res.send(refs)
        res.end()
    });

});

app.get("/api/getlist1", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {

        db
            .query("SELECT * FROM student_elective ", function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)
                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})

app.get("/api/getlist2", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {

        db
            .query("SELECT * FROM electivechange ", function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)
                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})

app.get("/api/getfeedele", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {
        var x1 = tempid.split("@")[0]
        var depart = x1
            .split(".")[2]
            .slice(2, 5)
            .toUpperCase()
        db.query("SELECT electivename FROM dept_elective WHERE department=?", [depart], function (err, result) {

            if (err) {
                res.send("error")

                res.end()
                return next(err)
            }
            let x = []
            let n = result.length
            for (let i = 0; i < n; i++) {
                let vals = JSON.parse(JSON.stringify(result))[i]
                let xn = Object.values(vals)
                let state = {
                    id: i + 1,
                    content: xn
                }
                x.push(state)
            }

            res.send(JSON.stringify(x))
            res.end()

        });
    });

})

app.get("/api/getfeedele1", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {
        db
            .query("SELECT electivename FROM dept_elective", function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)
                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})

app.post("/api/getreport", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {
        db
            .query("SELECT feedback,suggestions FROM student_feedback WHERE electivename=?", [req.body.name], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)

                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})

app.post("/api/getavg", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {
        db
            .query("SELECT AVG(rating),COUNT(*)FROM student_feedback WHERE electivename=?", [req.body.name], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)

                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})
app.post("/api/manageelective", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});
    var department = req.body.dept;
    let noofelectives = 0;

    let dict1 = {}
    db.getConnection(function (err) {
        db
            .query("SELECT * from dept_elective where department=?", [department], function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }

                noofelectives = result.length
                console.log(noofelectives)
                for (let i = 0; i < noofelectives; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)

                    let list1 = []
                    list1.push(xn[2])
                    list1.push(xn[3])
                    list1.push(0)
                    dict1[xn[1]] = list1

                }

            });
        department = department.toLowerCase();
        console.log(department)
        let finalallotment = {}
        let filledpref = []
        db.query("SELECT * from student_elective where rno REGEXP ? ", [department], function (err, result) {
            console.log(result.length)
            for (let i = 0; i < result.length; i++) {
                let vals = JSON.parse(JSON.stringify(result))[i]
                let xn = Object.values(vals)
                filledpref.push(xn)

            }

            for (let i = 0; i < result.length; i += noofelectives) {
                //console.log(finalallotment)
                for (let j = i; j < i + noofelectives; j++) {
                    let preference = filledpref[j][4]
                    let rollno = filledpref[j][1]
                    if (dict1[preference][2] < dict1[preference][0]) {
                        finalallotment[rollno] = preference
                        dict1[preference][2] += 1
                        break;

                    }

                }
            }
            let electivesdrop = []
            let maxcap="";
            for (var key in dict1) {
                if (maxcap==""){
                    maxcap=key;
                }
                if (dict1.hasOwnProperty(key)) {
                    if (dict1[key][2] < dict1[key][1]) {
                        electivesdrop.push(key)
                        if (dict1[maxcap][2]<dict1[key][2]){
                            maxcap=key
                        }

                    }
                }
            }
            
            
            //console.log(finalallotment)
            for (let i = 0; i < result.length; i += noofelectives) {

                if (electivesdrop.includes(finalallotment[filledpref[i][1]])) {
                    console.log("changing for")
                    let y = false;
                    
                    
                    for (var key in dict1) {
                        if (dict1.hasOwnProperty(key)) {
                            //console.log(key,dict1[key][2],dict1[key][0])
                            
                            if (dict1[key][2] >= dict1[key][1] && dict1[key][2] > dict1[key][0] && y == false) {

                                finalallotment[filledpref[i][1]] = key
                            }
                        }
                    }
                    console.log("y", y)
                    if (y == false) {
                        dict1[finalallotment[filledpref[i][1]]][2] -= 1
                        finalallotment[filledpref[i][1]] = maxcap
                        //console.log(maxcap)
                        //console.log(dict1[maxcap])
                        dict1[maxcap][0] +=1 
                        dict1[maxcap][2] +=1
                    }

                }

            }
            console.log(dict1)
            console.log(finalallotment)

            for (var key in finalallotment) {
                if (finalallotment.hasOwnProperty(key)) {
                    db.query("update student_details set elective= ? where rno=? ", [finalallotment[key], key], function (err, result) {
                        if (err) {

                            res.end()
                        }

                    })
                }
            }
            
            for (var key in dict1) {
                if (dict1.hasOwnProperty(key)) {
                    console.log(dict1[key], key)
                    
                    
                    db.query("update dept_elective set  max = ?,alloted = ? where electivename = ?", [dict1[key][0], dict1[key][2], key], function (err, result) {
                        if (err) {

                            res.end()
                        }

                    })
                }
            }
            ans=[]
            for(var key in finalallotment){
                let state={
                    id:key,
                    content:finalallotment[key]
            }
            ans.push(state)
        }
            console.log(ans)
            res.send(JSON.stringify(ans))
            res.end()

        });

    })
})

app.get("/api/getlist3", (req, res) => {
    const db = mysql.createPool({host: "localhost", user: "root", password: "1234", database: "electivedb"});

    db.getConnection(function (err) {
        var x1 = tempid.split("@")[0]
        var depart = x1
            .split(".")[2]
            .slice(2, 5)
            db.query("SELECT * FROM student_details where rno REGEXP ?",[depart] , function (err, result) {

                if (err) {
                    res.send("error")

                    res.end()
                    return next(err)
                }
                let x = []
                let n = result.length
                for (let i = 0; i < n; i++) {
                    let vals = JSON.parse(JSON.stringify(result))[i]
                    let xn = Object.values(vals)
                    let state = {
                        id: i + 1,
                        content: xn
                    }
                    x.push(state)
                }

                res.send(JSON.stringify(x))
                res.end()

            });
    });

})

app.post('/api/logout', () => {
    tempid = ""
});

app.listen(3001, () => {
    console.log('running on port 3001');
})
