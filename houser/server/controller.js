module.exports =  {
    getHouses: (req, res, next) => {
        const db = req.app.get('db')
        db.getAllHouses().then(houses => {
            res.status(200).send(houses)
        }).catch(()=> res.status(500).send())
    },

    newHouse: (req, res, next) => {
        const db = req.app.get('db');
        const {name, address, city, state, zipcode} = req.body;
        db.addHouse(name, address, city, state, zipcode).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.deleteHouse(id).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    }
}