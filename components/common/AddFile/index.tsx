import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";

function AddFile() {
  const [file, setFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log("Add file");
    console.log(imgUrl);
  }, [file, imgUrl]);

  const imageInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      const url = URL.createObjectURL(files[0]);
      setImgUrl(url);
    }
  };

  const uploadClickHandler = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  return (
    <S.BackgroundContainer>
      <div>
        {imgUrl ? (
          <S.UploadContainer className="backgrouded">
            <img src={imgUrl} style={{ height: "100%" }} />
          </S.UploadContainer>
        ) : (
          <>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              ref={imageInput}
            />
            <S.UploadContainer className="addArea" onClick={uploadClickHandler}>
              ADD MUSIC
            </S.UploadContainer>
          </>
        )}
      </div>
    </S.BackgroundContainer>
  );
}

export default AddFile;
