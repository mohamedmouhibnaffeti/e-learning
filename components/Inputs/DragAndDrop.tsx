"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus } from "lucide-react";

interface ImageUploaderProps {
  preview: string | ArrayBuffer | null
  setPreview: any
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ preview, setPreview }) => {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
      } catch (error) {
        setPreview(null);
      }
    },
    [setPreview],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex w-36 h-36 cursor-pointer flex-col items-center justify-center rounded-full shadow-sm"
      >
        {preview && (
          <img
            src={preview as string}
            alt="Uploaded image"
            className="w-full h-full rounded-full object-cover"
          />
        )}
        <ImagePlus className={`size-40 ${preview ? "hidden" : "block"}`} />
        <input {...getInputProps()} type="file" />
      </div>

      {fileRejections.length !== 0 && (
        <p className="text-red-600">
          Image must be less than 1MB and of type png, jpg, or jpeg.
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
