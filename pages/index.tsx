import { NextPage } from 'next';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import CommunityBoards from '../libs/components/homepage/CommunityBoards';
import PopularProperties from '../libs/components/homepage/VehicleGenesis';
import TopAgents from '../libs/components/homepage/TopAgents';
import Events from '../libs/components/homepage/Events';
import TrendProperties from '../libs/components/homepage/VehicleBMW';
import TopProperties from '../libs/components/homepage/VehicleHyundai';
import { Stack } from '@mui/material';
import Advertisement from '../libs/components/homepage/Advertisement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import VehicleKia from '../libs/components/homepage/VehicleKia';
import VehicleMerc from '../libs/components/homepage/VehicleMERC';
import VehicleBMW from '../libs/components/homepage/VehicleBMW';
import VehicleGenesis from '../libs/components/homepage/VehicleGenesis';
import VehicleHyundai from '../libs/components/homepage/VehicleHyundai';
import VehicleAudi from '../libs/components/homepage/VehicleAudi';

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
				<TrendProperties />
				<PopularProperties />
				<Advertisement />
				<TopProperties />
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
				<TopAgents />
				<Events />
				<CommunityBoards />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
