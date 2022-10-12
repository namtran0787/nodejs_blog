class SiteController {

    // [GET] / 
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

// exports cái gì thì require cái đó