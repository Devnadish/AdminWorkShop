"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { StickyNote, Upload } from "@/lib/icons";
import { getSignature, saveToDatabase } from "@/db/imageDb";
import { Button } from "@/components/ui/button";
import Submit from "@/components/sharedcompnent/Submit";
import INPUT from "@/components/sharedcompnent/INPUT";

const Dropzone = ({ className ,carId}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': [ '.jpg', '.jpeg' ],
      'image/png': [ '.png' ]
    },
    maxSize: 5242880, // Set the maximum file size to 5MB (in bytes)
    maxFiles: 1, // Limit the number of files to 1
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  

  const removeAll = () => {
    setFiles([]);
  };

 
  async function action(formDescription) {
    for (const file of files) {
      // get a signature using server action for each file
      const { timestamp, signature } = await getSignature();

      // upload each file to cloudinary using the signature
      const formData = new FormData();

      formData.append("file", file);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("folder", "next");
      const description=formDescription.get("description")

      

      const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
      const data = await fetch(endpoint, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      // write to database using server actions for each file
      await saveToDatabase({
        version: data?.version,
        signature: data?.signature,
        public_id: data?.public_id,
        carId:carId,
        description
      });
    }
  }

  return (
    <form action={action} className="flex flex-col   gap-4 border p-2 rounded">
      <INPUT icon={<StickyNote/>} name="description" placeholder={"وصف الصورة"}/>
    <div className="flex flex-col w-full flex-1 gap-4">
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps({ name: "file" })} />
        <div className="flex  items-center justify-center gap-4">
          <Upload className="h-5 w-5  text-white" />
          {isDragActive ? (
            <p>افلت الصورة هنا ...</p>
          ) : (
            <p>اضغط هنا لكي تتختار الصورة..</p>
          )}
        </div>
      </div>
  
      <div className="flex flex-col items-center justify-center gap-4">
          {files.length > 0 && (
            <div key={files[0].name} className="rounded-md shadow-lg flex items-center justify-center flex-col w-[300px] h-[200px]">
              <Image
                src={files[0].preview}
                alt={files[0].name}
                width={200}
                height={200}
                onLoad={() => {
                  URL.revokeObjectURL(files[0].preview);
                }}
                className="h-full w-full rounded-md object-contain"
              />
             
              <span className="mt-1 text-[12px] font-medium text-stone-500 ">
                {files[0].name}
              </span>
            </div>
          )}
      </div>
  
      <div className="flex items-center justify-between w-full">
        <Submit title="حفظ الصورة"/>
        {/* <Button
          type="submit"
          className=" w-1/3 rounded-md border border-purple-400 px-3 text-[12px] font-bold  text-stone-500 transition-colors hover:bg-purple-400 hover:text-white"
        >
          حفظ الصورة
        </Button> */}
        <Button
          type="button"
          onClick={removeAll}
          className="w-1/3 rounded-md border border-rose-400 px-3 text-[12px] font-bold   text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
        >
          مسح الصورة
        </Button>
      </div>
    </div>
  </form>
  );
};
export default Dropzone;

 