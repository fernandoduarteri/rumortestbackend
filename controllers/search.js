const { response, request } = require('express');
const  { createApi } = require ('unsplash-js');
const nodeFetch = require('node-fetch');
require('dotenv').config();

const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY,
    fetch: nodeFetch
  });

const getImages = async (req = request, res = response) => {
    const {key} = req.body;
    const {perPage} = req.body;
    const {page} = req.body;

    try {

        const photos = await unsplash.search.getPhotos({
            query: key,
            page,
            perPage
        });
        res.status(200).json({
            ok: true,
            photos
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Erro getting photos'
        })
    }

}




module.exports = {
    getImages
    
}