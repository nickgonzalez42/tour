import { useState } from "react";
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const photoSphereRef = React.createRef(<ReactPhotoSphereViewer />);

  // Create a reference to the component

  // Or to be sure that the component is mounted
  React.useEffect(() => {
    if (!photoSphereRef.current) return;
    photoSphereRef.current.setPanorama(`/70${currentPhoto}.jpg`);
  }, [photoSphereRef, currentPhoto]);

  const handleIncrementPhoto = () => {
    if (currentPhoto === 7) {
      setCurrentPhoto(1);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  const handleDecrementPhoto = () => {
    if (currentPhoto === 1) {
      setCurrentPhoto(7);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  return (
    <div className="bg-slate-400 grid place-items-center w-screen">
      <ReactPhotoSphereViewer ref={photoSphereRef} src={`/70${currentPhoto}.jpg`} height={"100vh"} width={"100vw"} />
      <div className="bg-black min-w-fit h-20 bg-opacity-40 absolute top-0 flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 h-3/5 m-8 cursor-pointer bg-white border rounded-full border-black border-solid"
          onClick={handleDecrementPhoto}
          type="button"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <p className="text-white font-serif lg:text-3xl shrink">McDonald&apos;s 1st Store Museum</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 h-3/5 m-8 cursor-pointer bg-white border rounded-full border-black border-solid"
          onClick={handleIncrementPhoto}
          type="button"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
}

export default App;
