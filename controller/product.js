const express = require('express'),
    router = express.Router(),
    conn = require('../config/database'),
    Kategori = require('../model/kategoris'),
    Product = require('../model/products');

//Mengambil halaman pertama
router.get('/',(req, res) => {
    res.send(`1. /create <br>
              2. /get <br>
              3. /get_id/:id <br>
              4. /update <br>
              5. /delete <br>
    `)
})

//Menambahkan data Product
router.post('/create', async (req, res)=>{
    
    try{
        const {name,desc,image,category_id} = req.query;
        var nama      = name.trim();
        var desk     = desc.trim();
        var img     = image.trim();
        var kat       = category_id.trim();
    
        //cek apakah ada nama yang sama
        const cek_nama = await Product.findOne({
            where: { name }
        });

        const cekKategori = await Kategori.findOne({
            where: {
                id: category_id
            }
        })

        if(nama == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Nama product tidak boleh kosong"
            })
        }else if(desk == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Deskripsi product tidak boleh kosong"
            })
        }else if(img == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Foto product tidak boleh kosong"
            })
        }else if(kat == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Kategori product tidak boleh kosong"
            })
        }else if(!cekKategori){
            res.status(200).json({
                "status": false,
                "msg" : "Kategori yang anda pilih tidak ada"
            })
        }
        else if(cek_nama){
            res.status(200).json({
                "status": false,
                "msg" : "Nama product sudah ada"
            })
        }else{
             await Product.create({
                name: nama,
                desc: desk,
                image: img,
                category_id: kat
            });

            res.status(200).json({
                "status": true,
                "msg" : "Berhasil tambahkan product"
            })
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }
})

//Menampilakan keseluruhan data Product
router.get('/get', async (req,res)=>{
    try {
        const getAll = await Product.findAll();
        res.status(200).json({
            "status": true,
            "msg" : "Berhasil tampilkan product",
            "data": getAll
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: 'Terjadi kesalahan' });
    }
})

// //menampilkan data berdasarkan ID
router.get('/get_id/:id', async (req,res)=>{
    
    try {
        const { id } = req.params;

        const getId = await Product.findOne({
            where: { id }
        });

        if(!getId){
            res.status(200).json({
                "status": false,
                "msg" : "Data product tidak temukan"
            });
        }else{
            res.status(200).json({
                "status": true,
                "msg" : "Berhasil tampilkan product berdasarkan ID",
                "data": getId
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }

})

// //ubah data berdasarkan ID
router.put('/update/:id', async (req,res)=>{

    try{
        const { id } = req.params;
        const {name,desc,image,category_id} = req.query;
        var nama      = name.trim();
        var desk     = desc.trim();
        var img     = image.trim();
        var kat       = category_id.trim();
    
        //cek apakah ada nama yang sama
        const cek_nama = await Product.findOne({
            where: { name }
        });

        //cek apakah ada ID
        const cekID = await Product.findOne({
            where: { id }
        });

        const cekKategori = await Kategori.findOne({
            where: {
                id: category_id
            }
        })

        if(nama == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Nama product tidak boleh kosong"
            })
        }else if(desk == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Deskripsi product tidak boleh kosong"
            })
        }else if(img == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Foto product tidak boleh kosong"
            })
        }else if(kat == ""){
            res.status(200).json({
                "status": false,
                "msg" : "Kategori product tidak boleh kosong"
            })
        }else if(!cekID){
            res.status(200).json({
                "status": false,
                "msg" : "Data product tidak temukan"
            });
        }else if(!cekKategori){
            res.status(200).json({
                "status": false,
                "msg" : "Kategori yang anda pilih tidak ada"
            })
        }
        else if(cek_nama){
            res.status(200).json({
                "status": false,
                "msg" : "Nama product sudah ada"
            })
        }else{

            await Product.update(
                { 
                    name: nama,       
                    desc: desk,        
                    image: img,        
                    category_id: kat   
                },
                {
                    where: {
                        id: id
                    }
                }
            );

            res.status(200).json({
                "status": true,
                "msg" : "Product berhasil diubah"
            })
        }
    }catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }

})

// //Hapus data Product
router.delete('/delete/:id', async (req,res)=>{
    
    try {
        const { id } = req.params;
        
        const getId = await Product.findOne({
            where: { id }
        });

        if(!getId){
            res.status(200).json({
                "status": false,
                "msg" : "Data product tidak temukan"
            })
        }else{
            await Product.destroy({
                where: {
                  id: id
                }
              });
    
            res.status(200).json({
                "status": true,
                "msg" : "Berhasil menghapus product"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({"status": false, message: err });
    }
})

module.exports = router