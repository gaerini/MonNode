import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import * as S from "./style";
import { useS3Upload } from "next-s3-upload";
import API from "../../../pages/api/base-api";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function AddFile() {
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [file, setFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const { data: session, status } = useSession();

  const router = useRouter();

  let [imageUrl, setImageUrl] = useState<string | null>(null);
  let handleFileInputChange = async (file: File): Promise<void> => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  // const uploadFile = async () => {
  //   if (file) {
  //     if (process.env.S3_UPLOAD_BUCKET !== undefined) {
  //       const params = {
  //         Bucket: process.env.S3_UPLOAD_BUCKET,
  //         Key: `${Date.now()}.${file.name}`,
  //         Body: file,
  //       };

  //       const uploadPromise = s3.upload(params).promise();

  //       try {
  //         console.log(uploadPromise);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   }
  // };
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
      console.log(url);
      setImgUrl(url);
    }
  };

  const uploadClickHandler = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  // return (
  //   <S.BackgroundContainer>
  //     <div>
  //       {imgUrl ? (
  //         <S.UploadContainer className="backgrouded">
  //           <img src={imgUrl} style={{ height: "100%" }} />
  //         </S.UploadContainer>
  //       ) : (
  //         <>
  //           <input
  //             type="file"
  //             onChange={handleFileChange}
  //             style={{ display: "none" }}
  //             ref={imageInput}
  //           />
  //           <S.UploadContainer className="addArea" onClick={uploadClickHandler}>
  //             ADD MUSIC
  //           </S.UploadContainer>
  //         </>
  //       )}
  //     </div>
  //     <button onClick={uploadFile}>노드 만들기</button>
  //   </S.BackgroundContainer>
  // );
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    if (session) {
      API.post("/newpost", {
        email: (session.user as { email: string }).email,
        imageList: `["${imageUrl}"]`,
        decibels: 0,
        content: comment,
      }).then((response) => {
        if (response.data.success) {
          router.push("/play");
        }
      });
    }
  };
  return (
    <div>
      <FileInput onChange={handleFileInputChange} />
      <S.UploadContainer className="backgrouded">
        <button onClick={openFileDialog}>Upload file</button>

        {imageUrl && <img src={imageUrl} style={{ height: "100%" }} />}
      </S.UploadContainer>
      <input
        placeholder="노래와 함께 올릴 멘트를 적어주세요"
        onChange={onChangeHandler}
      ></input>
      <button onClick={onClickHandler}>새 노드 작성</button>
    </div>
  );
}

export default AddFile;
