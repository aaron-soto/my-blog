import "./note.scss";

export const Note = ({ type, children }) => {
	return <div className={`note ${type}`}>{children}</div>;
};
