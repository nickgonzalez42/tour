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
    <div className="grid place-items-center w-screen">
      <ReactPhotoSphereViewer ref={photoSphereRef} src={`/70${currentPhoto}.jpg`} height={"100vh"} width={"100vw"} />
      <div className="bg-black min-w-fit h-20 bg-opacity-40 absolute top-0 flex items-center justify-between">
        <button
          className="text-white bg-gradient-to-br from-yellow-600 to-red-500 hover:bg-gradient-to-bl focus:ring-red-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-2"
          onClick={handleDecrementPhoto}
        >
          Move Back
        </button>
        <p className="text-white font-sans lg:text-3xl shrink">McDonald&apos;s 1st Store Museum</p>
        <button
          className="text-white bg-gradient-to-br from-red-600 to-yellow-500 hover:bg-gradient-to-bl focus:ring-yellow-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 ml-2"
          onClick={handleIncrementPhoto}
        >
          Move Forward
        </button>
      </div>
    </div>
  );
}

export default App;
