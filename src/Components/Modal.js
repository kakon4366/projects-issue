import React, { useState } from "react";
import {
	CButton,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CModalTitle,
} from "@coreui/react";

const Modal = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<h2>Hello Modal</h2>
			<CButton onClick={() => setVisible(!visible)}>
				Launch demo modal
			</CButton>
			<CModal
				className="show d-block position-static"
				backdrop={false}
				keyboard={false}
				portal={false}
				visible
			>
				<CModalHeader>
					<CModalTitle>Modal title</CModalTitle>
				</CModalHeader>
				<CModalBody>Modal body text goes here.</CModalBody>
				<CModalFooter>
					<CButton color="secondary">Close</CButton>
					<CButton color="primary">Save changes</CButton>
				</CModalFooter>
			</CModal>
		</div>
	);
};

export default Modal;
