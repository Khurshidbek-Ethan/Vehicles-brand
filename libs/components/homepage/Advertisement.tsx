import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack } from '@mui/material';

const Advertisement = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return <Stack className={'video-frame'}></Stack>;
	} else {
		return (
			<Stack className={'video-frame'} marginLeft={'80px'} style={{ width: 'auto' }}>
				<Stack className="first-block">
					<div className="block1">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{ width: '100%', height: '300px', objectFit: 'cover', paddingLeft: '5px' }}
						>
							<source src="/video/hyun.mov" type="video/mp4" />
						</video>
					</div>

					<div className="block3">
						<video
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							style={{ width: '100%', height: '300px', objectFit: 'cover', marginTop: '10px', paddingLeft: '5px' }}
						>
							<source src="/video/audi.mov" type="video/mp4" />
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
								width: '960px',
								height: '200px',
								objectFit: 'cover',
								paddingLeft: '15px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/genesisv.mov" type="video/mp4" />
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
								width: '960px',
								height: '200px',
								objectFit: 'cover',
								paddingTop: '10px',
								paddingLeft: '15px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/mers.mov" type="video/mp4" />
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
								width: '960px',
								height: '210px',
								objectFit: 'cover',
								paddingTop: '10px',
								paddingLeft: '15px',
								paddingRight: '20px',
							}}
						>
							<source src="/video/Kiav.mov" type="video/mp4" />
						</video>
					</div>
				</Stack>
			</Stack>
		);
	}
};

export default Advertisement;
