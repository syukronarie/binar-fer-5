import "./App.css";
import ModalImage from "react-modal-image";

function ModalDemo() {
	const urlToTinyImageFile =
		"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__240.jpg";
	const urlToHugeImageFile =
		"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
	return (
		<ModalImage
			small={urlToTinyImageFile}
			large={urlToHugeImageFile}
			alt="Hello World!"
		/>
	);
}

export default ModalDemo;
