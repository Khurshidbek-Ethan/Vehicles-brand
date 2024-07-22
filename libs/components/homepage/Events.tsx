import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}
const eventsData: EventData[] = [
	{
		eventTitle: 'we are about to sign a contract with chevrolet',
		city: 'TESLA COMPANY',
		description: '',
		imageSrc: '/img/events/logo2.png',
	},
	{
		eventTitle: 'We are on the verge of finalizing a contract with this company',
		city: 'SSANGYONG COMPANY ',
		description: '',
		imageSrc: '/img/events/ss.png',
	},
	{
		eventTitle: 'Recently, Chevrolet company will come to make a contract with us',
		city: 'SHEVROLET COMPANY',
		description: '',
		imageSrc: '/img/events/logo3.png',
	},
	{
		eventTitle: 'we will start selling lexus cars on monday',
		city: 'LEXUS COMPANY',
		description: '',
		imageSrc: '/img/events/logo4.png',
	},
];

const EventCard = ({ event }: { event: EventData }) => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack
				className="event-card"
				style={{
					backgroundImage: `url(${event?.imageSrc})`,
					backgroundSize: 'contain',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box component={'div'} className={'info'}>
					<strong>{event?.city}</strong>
					<span>{event?.eventTitle}</span>
				</Box>
				<Box component={'div'} className={'more'}>
					<span>{event?.description}</span>
				</Box>
			</Stack>
		);
	}
};

const Events = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack className={'events'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span className={'white'}>Events</span>
							<p className={'white'}>Events waiting your attention!</p>
						</Box>
					</Stack>
					<Stack className={'card-wrapper'}>
						{eventsData.map((event: EventData) => {
							return <EventCard event={event} key={event?.eventTitle} />;
						})}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Events;
