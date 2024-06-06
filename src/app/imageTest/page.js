import Image from "next/image";
import Profile from "../../../public/next.svg";
const ImageTest = () => {
  console.log(Profile);
  return (
    <div>
      <h1>Image Optimization in Next</h1>
      <Image
        src={
          "https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2FYTXOHVaooTOlFNTq3816gcxoflujFPirzrTaCV64.jpg&w=1080&q=75"
        }
        alt="helloImage"
        height={200}
        width={200}
      />
    </div>
  );
};
export default ImageTest;
