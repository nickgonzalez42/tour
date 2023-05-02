import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export function Sphere(props) {
  return (
    <ReactPhotoSphereViewer src={`/img${props.img}.jpg`} height={"100vh"} width={"100vw"}></ReactPhotoSphereViewer>
  );
}
