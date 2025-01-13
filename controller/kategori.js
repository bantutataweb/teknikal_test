
const express = require('express'),
    router = express.Router(),
    conn = require('../config/database'),
    Kategori = require('../model/kategoris');

//Mengambil halaman pertama
router.get('/',(req, res) => {
    res.send(`1. /create <br>
              2. /get <br>
              3. /get_id/:id <br>
              4. /update <br>
              5. /delete <br>
    `)
})

//Menambahkan data kategori
router.post('/create', async (req, res)=>{
    
    try{
        const {name} = req.query;
        var nama     = name.trim();
    
        //cek apakah ada nama yang sama
        const cek_nama = await Kategori.findOne({
            where: { name }
        });

        if(nama == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Nama kategori tidak boleh kosong"
            })
        }else if(cek_nama){
            res.status(200).json({
                "status": false,
                "msg" : "Nama kategori sudah ada"
            })
        }else{
             await Kategori.create({
                name: nama
            });

            res.status(200).json({
                "status": true,
                "msg" : "Berhasil tambahkan kategori"
            })
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }
})

//Menampilakan keseluruhan data kategori
router.get('/get', async (req,res)=>{
    try {
        const getAll = await Kategori.findAll();
        res.status(200).json({
            "status": true,
            "msg" : "Berhasil tampilkan kategori",
            "data": getAll
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: 'Terjadi kesalahan' });
    }
})

//menampilkan data berdasarkan ID
router.get('/get_id/:id', async (req,res)=>{
    
    try {
        const { id } = req.params;

        const getId = await Kategori.findOne({
            where: { id }
        });

        if(!getId){
            res.status(200).json({
                "status": false,
                "msg" : "Data Kategori tidak temukan"
            });
        }else{
            res.status(200).json({
                "status": true,
                "msg" : "Berhasil tampilkan kategori berdasarkan ID",
                "data": getId
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }

})

//ubah data berdasarkan ID
router.put('/update/:id', async (req,res)=>{

    try{
        const {name} = req.query;
        const id = req.params.id;
        const nama     = name.trim();
    
        //cek apakah ada nama yang sama
        const cek_nama = await Kategori.findOne({
            where: { name }
        });
    
         //cek apakah ada ID tersebut
        const cekId = await Kategori.findOne({
            where: { id }
        })

        if(nama == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Nama kategori tidak boleh kosong"
            })
        }else if(!cekId){
            res.status(200).json({
                "status": false,
                "msg" : "Data Kategori tidak temukan"
            })
        }
        else if(cek_nama){
            res.status(200).json({
                "status": false,
                "msg" : "Nama kategori sudah ada"
            })
        }else{

            await Kategori.update(
                { name: nama },
                {
                    where: {
                        id: id
                    }
                }
            );

            res.status(200).json({
                "status": true,
                "msg" : "Kategori berhasil diubah"
            })
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }

})

//Hapus data kategori
router.delete('/delete/:id', async (req,res)=>{
    
    try {
        const { id } = req.params;
        
        const getId = await Kategori.findOne({
            where: { id }
        });

        if(!getId){
            res.status(200).json({
                "status": false,
                "msg" : "Data Kategori tidak temukan"
            })
        }else{
            await Kategori.destroy({
                where: {
                  id: id
                }
              });
    
            res.status(200).json({
                "status": true,
                "msg" : "Berhasil menghapus kategori"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }
})

module.exports = router