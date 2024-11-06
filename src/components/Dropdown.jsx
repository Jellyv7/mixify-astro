import { useState, useRef, useEffect } from "react";

export const Dropdown = ({ options }) => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<div>
				<button onClick={toggleMenu}>
					...
				</button>
			</div>
			{open && (
				<div ref={dropdownRef}>
					<ul>
						{
							options.map(({ name, callback }, ind) => {
								return (
									<li onClick={callback} key={`key-${ind}`}>
										{name}
									</li>
								);
							})
						}
					</ul>
				</div>
			)}
		</>
	);
};