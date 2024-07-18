import { NextPage } from 'next';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import CommunityBoards from '../libs/components/homepage/CommunityBoards';
import TopAgents from '../libs/components/homepage/TopAgents';
import Events from '../libs/components/homepage/Events';
import { Stack } from '@mui/material';
import Advertisement from '../libs/components/homepage/Advertisement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import VehicleKia from '../libs/components/homepage/VehicleKia';
import VehicleBMW from '../libs/components/homepage/VehicleBMW';
import VehicleGenesis from '../libs/components/homepage/VehicleGenesis';
import VehicleAudi from '../libs/components/homepage/VehicleAudi';
import VehicleMerc from '../libs/components/homepage/VehicleMerc';
import VehicleHyundai from '../libs/components/homepage/VehicleHyundai';
import TopProperties from '../libs/components/homepage/TopProperties';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const Home: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return (
			<Stack className={'home-page'}>
				<VehicleBMW />
				<VehicleGenesis />
				<VehicleHyundai />
				<VehicleAudi />
				<VehicleMerc />
				<VehicleKia />
				<Advertisement />
				<TopAgents />
			</Stack>
		);
	} else {
		return (
			<Stack className={'home-page'}>
				<VehicleBMW />
				<VehicleGenesis />
				<VehicleHyundai />
				<VehicleAudi />
				<VehicleMerc />
				<VehicleKia />
				<Advertisement />
				<TopProperties />
				<TopAgents />
				<Events />
				<CommunityBoards />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
