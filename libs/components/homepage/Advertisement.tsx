import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack } from '@mui/material';

const Advertisement = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return (
			<Stack className={'video-frame'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/ads.mov" type="video/mp4" />
				</video>
			</Stack>
		);
	} else {
		return (
			<Stack className={'video-frame'}>
				<Stack className="first-block">
					<div className="block1">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{ width: '100%', height: '300px', objectFit: 'cover', paddingLeft: '20px' }}
						>
							<source src="/video/ads.mov" type="video/mp4" />
						</video>
					</div>

					<div className="block3">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{ width: '100%', height: '300px', objectFit: 'cover', marginTop: '10px', paddingLeft: '20px' }}
						>
							<source src="/video/ads.mov" type="video/mp4" />
						</video>
					</div>
				</Stack>
				<Stack className="second-block">
					<div className="second1">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{
								width: '100%',
								height: '200px',
								objectFit: 'cover',
								paddingLeft: '10px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/ads.mov" type="video/mp4" />
						</video>
					</div>
					<div className="second2">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{
								width: '1200px',
								height: '200px',
								objectFit: 'cover',
								paddingTop: '10px',
								paddingLeft: '10px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/ads.mov" type="video/mp4" />
						</video>
					</div>
					<div className="second3">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{
								width: '1200px',
								height: '210px',
								objectFit: 'cover',
								paddingTop: '10px',
								paddingLeft: '10px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/ads.mov" type="video/mp4" />
						</video>
					</div>
				</Stack>
			</Stack>
		);
	}
};

export default Advertisement;
