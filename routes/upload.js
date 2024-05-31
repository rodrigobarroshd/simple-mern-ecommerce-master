const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')



router.post('/destroy', auth, authAdmin, (req, res) => {
    try {
        const { public_id } = req.body;
        if (!public_id) {
            return res.status(400).json({ msg: 'No image selected' });
        }

        cloudinary.uploader.destroy(public_id, (err, result) => {
            if (err) throw err;

            res.json({ msg: 'data deleted' });
        });

    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});





module.exports = router