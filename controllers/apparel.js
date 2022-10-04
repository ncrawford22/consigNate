const Apparel = require('../models/apparel/apparel');
const seed = require('../models/apparel/seed');


// ROUTE    GET /apparel     (index)
const findAllApparels = (req, res) => {
    Apparel.find({}, (err, foundApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('apparel/Index', {apparels: foundApparel})

        }
    });
}

// ROUTE    Get /apparel/new    (new)
const showNewView = (req, res) => {
    res.render('apparel/New');
}

// ROUTE    DELETE /apparel/:id    (delete)
const deleteOneApparel = (req, res) => {
    Apparel.findByIdAndDelete(req.params.id, (err, deleteApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/apparel')
        }
    });
}

// ROUTE    Put /apparel/:id    (update)
const updateOneApparel = (req, res) => {
    if (req.body.itemInStock === 'on') {
        req.body.itemInStock = true
    } else {
        req.body.itemInStock = false
    }

    Apparel.findByIdAndUpdate(req.params.id, req.body, (err, updatedApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/apparel/${updatedApparel._id}`)
        }
    });}

// ROUTE    POST /Apparels    (create)
const createNewApparel = (req, res) => {
    if (req.body.itemInStock === 'on') {
        req.body.itemInStock = true
    } else {
        req.body.itemInStock = false
    }

    Apparel.create(req.body, (err, createdApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/apparel')
        }
    });
}

// ROUTE      GET /apparel/:id/edit     (edit)
const showEditView = (req, res) => {
    Apparel.findById(req.params.id, (err, foundApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('apparel/Edit', {apparel: foundApparel})
        }
    });
}

// ROUTE    Get /apparel/:id    (show)
const showOneApparel= (req, res) => {

    Apparel.findById(req.params.id, (err, foundApparel) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('apparel/Show', {apparel: foundApparel});
        }
    });
}

// ROUTE       GET /apparel/seed      (seed)
const seedData = (req, res) => {
    Apparel.deleteMany({}, (err, deletedApparels) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Apparel.create(seed.apparels, (err, createdApparels) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/apparel')
                }
            })
        }
    });
}

// ROUTE       GET /apparel/clear      (clear)
const clearData = (req, res) => {
    Apparel.deleteMany({}, (err, deletedApparels) => {
        if (err) {
            res.status(400).json(err)
        } else {
                res.status(200).redirect('/apparel')
            }
    })
}


module.exports = {
    findAllApparels,
    showNewView,
    createNewApparel,
    showOneApparel,
    seedData,
    showEditView,
    updateOneApparel,
    deleteOneApparel,
    clearData
}