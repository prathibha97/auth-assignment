const fs = require('fs')

const uploadImage = (req,res)=>{
  if(!req.file){
    return res.status(400).json({
      message: 'No file uploaded'
    })
  }

  // if(req.file.mimetype.startWith('/image')){
    fs.readFile(req.file.path, (err, data)=>{
      if(err){
        return res.status(400).json({message: 'Error reading file'})
      }
      res.send({
        data: data,
        contentType: req.file.mimetype
      })
    })
  // }else{
  //   fs.unlink(req.file.path, (err)=>{
  //     if(err){
  //       return res.status(400).json({message: err.message})
  //     }
  //   })
  // }
}

module.exports = uploadImage