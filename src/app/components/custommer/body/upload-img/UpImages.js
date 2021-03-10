import React, { useState } from 'react';

function UpImages(props) {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'laptop');
        setLoading(true);

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/cv-thav-herokuapp-com/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const file = await res.json();
        console.log(file);
        console.log(file.secure_url);
        setImage(file.secure_url);
        setLoading(false);
    
    }
    return (
      <div className="up-img">
        <h2>Upload Images to Cloudinary in React</h2>
        <input
          type="file"
          name="file"
          placeholder="Upload an Image !"
          onChange={uploadImage}
            />
            {loading ? <h3>Loadding ...</h3> : <img src={`${image}`} style={{width: '300px', height: '300px', objectFit: 'cover'}}alt={ 'test' }/>}
      </div>
    );
}

export default UpImages;