import { Dropdown } from "./index"

export const EditorMenu = () => {

	return (
		<section>
			<div>
				<h2>Customize your mixtape</h2>
				<div class="editor__options-container">
					<div class="container-left">
						<div class="editor__options--metrics">
							<h3>Choose your mix</h3>
							<Dropdown />
						</div>
						<div class="editor__options--time">
							<h3>Choose a time range</h3>
							{/* <div class="times__buttons">
							<div class="times__buttons--button">
								Name
							</div> 
						</div> */}
						</div>
						<div class="editor__options--text">
							<h3>Choose the alignment</h3>
							{/* <div class="text__buttons">
							<button class="text__buttons--button"> 
								Name
							</button>
						</div> */}
						</div>
					</div>
					<div class="container-right">
						<h3>Download your mixtape!</h3>
						<div class="download__button">Download</div>
					</div>
				</div>
			</div>
		</section>
	)
}
