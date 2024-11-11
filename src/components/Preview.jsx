import useClientStats from "src/hooks/fetchSpotify.jsx";
import { clientId, code } from "../utils/params.js";

const Preview = () => {
	const [ data ] = useClientStats(clientId, code);
	const filteredData = data.metrics[metric][term];
	const username = data.user;
	const country = data.country;
	const followers = data.followers;
	const duration = data.duration;
	const qrCode = data.codeQR

	return (
		<div className='mixtape'>
			<div className='texture'>
				<div className='name__span-left'>
					data from ${user} on Spotify - ${followers}
				</div>
			</div>
			<div className='mixtape__content left'>
				<div className='mixtape__title'>
					${username} Mixtape
				</div>
				<div>
					<div className='metrics__container'>
						{
							filteredData.forEach((name, ind) => {
								return (
									<span className='mixtape__song'>
										{ind + 1}. {name}
									</span>
								)
							})
						}
					</div>
				</div>
				<div className='footer__container'>
					<div className='icons__footer'>
						<div className='icons__left'>
							<img src='https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=https://mixifysite.netlify.app//'></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Preview;