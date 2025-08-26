import { ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ComingPopover = ({ children }: { children: ReactElement }) => {
	return (
		<OverlayTrigger
			overlay={<Tooltip id="tooltip-disabled">Coming soon!</Tooltip>}
		>
			<span>{children}</span>
		</OverlayTrigger>
	);
};

export default ComingPopover;
