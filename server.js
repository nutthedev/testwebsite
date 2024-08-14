const express = require(`express`);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const people = [
    { name: "aaa", state: "ผู้จัดการ" },
    { name: "bbb", state: "ผู้จัดการ" },
    { name: "ccc", state: "ผู้จัดการ" },
    { name: "ddd", state: "ผู้จัดการ" },
    { name: "eee", state: "ผู้จัดการ" },
    { name: "fff", state: "ผู้จัดการ" },
    { name: "ggg", state: "ผู้จัดการ" }
]

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const getId = function(index) {
            return `
            <div class="row justify-content-center">
                <div class="col-4 card p-3 mt-5 text-primary">
                    <h1 class="text-muted">Header</h1>
                    <hr class="text-muted">
                    <br>ชื่อพนักงาน: ${people[index].name}
                    <br>ตำแหน่ง: ${people[index].state}
                    <br>
                    <button class="btn btn-primary mt-3">View</button>
                </div>
            </div>
            `;
        }
        const renderResult = `
            ${getId(id)}
        `;
        res.render("index", { renderResult });
    } catch {
        res.render("404");
    }
});

app.get('/dashboard', (req, res) => {
    res.render("dashboard");
});

app.post('/api/hello', (req, res) => {

    res.status(200).send({ people });
});


app.listen(port, () => {
    console.log("Server Is Running...on port : " + port);
});