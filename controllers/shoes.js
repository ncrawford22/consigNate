const Shoe = require('../models/shoes/shoe');
const seed = require('../models/shoes/seed');


// ROUTE    GET /shoes     (index)
const findAllShoes = (req, res) => {
    Shoe.find({}, (err, foundShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('shoes/Index', {shoes: foundShoe})

        }
    });
}

// ROUTE    Get /shoes/new    (new)
const showNewView = (req, res) => {
    res.render('shoes/New');
}

// ROUTE    DELETE /shoes/:id    (delete)
const deleteOneShoe = (req, res) => {
    Shoe.findByIdAndDelete(req.params.id, (err, deleteShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/shoes')
        }
    });
}

// ROUTE    Put /shoes/:id    (update)
const updateOneShoe = (req, res) => {
    if (req.body.itemInStock === 'on' && req.body.numItemInstock > 0) {
        req.body.itemInStock = true
    } else {
        req.body.itemInStock = false
    }

    Shoe.findByIdAndUpdate(req.params.id, req.body, (err, updatedShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/shoes/${updatedShoe._id}`)
        }
    });}

// ROUTE    POST /shoes    (create)
const createNewShoe = (req, res) => {
    if (req.body.itemInStock === 'on' && req.body.numItemInstock > 0) {
        req.body.itemInStock = true
    } else {
        req.body.itemInStock = false

    }

    Shoe.create(req.body, (err, createdShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/shoes')
        }
    });
}

// ROUTE      GET /shoes/:id/edit     (edit)
const showEditView = (req, res) => {
    Shoe.findById(req.params.id, (err, foundShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('shoes/Edit', {shoe: foundShoe})
        }
    });
}

// ROUTE    Get /shoes/:id    (show)
const showOneShoePair = (req, res) => {

    Shoe.findById(req.params.id, (err, foundShoe) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('shoes/Show', {shoe: foundShoe});
        }
    });
}

// ROUTE       GET /shoes/seed      (seed)
const seedData = (req, res) => {
    Shoe.deleteMany({}, (err, deletedShoes) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Shoe.create(seed.shoes, (err, createdShoes) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/shoes')
                }
            })
        }
    });
}

// ROUTE       GET /shoes/clear      (clear)
const clearData = (req, res) => {
    Shoe.deleteMany({}, (err, deletedShoes) => {
        if (err) {
            res.status(400).json(err)
        } else {
                res.status(200).redirect('/shoes')
            }
    })
}


module.exports = {
    findAllShoes,
    showNewView,
    createNewShoe,
    showOneShoePair,
    seedData,
    showEditView,
    updateOneShoe,
    deleteOneShoe,
    clearData
}