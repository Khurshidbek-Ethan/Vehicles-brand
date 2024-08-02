import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Head from 'next/head';
import Top from '../Top';
import Footer from '../Footer';
import { Stack } from '@mui/material';
import { getJwtToken, updateUserInfo } from '../../auth';
import Chat from '../Chat';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';
import { useTranslation } from 'next-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const withLayoutBasic = (Component: any) => {
	return (props: any) => {
		const router = useRouter();
		const { t, i18n } = useTranslation('common');
		const device = useDeviceDetect();
		const [authHeader, setAuthHeader] = useState<boolean>(false);
		const user = useReactiveVar(userVar);

		const memoizedValues = useMemo(() => {
			let title = '',
				desc = '',
				bgImage = '';

			switch (router.pathname) {
				case '/property':
					title = 'Heir investigation into available vehicles led them to several promising options';
					desc = '';
					bgImage = '/img/banner/aqa.png';
					break;
				case '/agent':
					title = '';
					desc = '';
					bgImage = '/img/banner/dil.png';
					break;
				case '/agent/detail':
					title = 'Delaer Page';
					desc = ' ';
					bgImage = '/img/banner/del4.png';
					break;
				case '/mypage':
					title = '  .  ';
					desc = 'MY Page';
					bgImage = '/img/banner/my3.png';
					break;
				case '/community':
					title = '';
					desc = 'Home / For Rent';
					bgImage = '/img/banner/buf.png';
					break;
				case '/community/detail':
					title = 'Community Detail';
					desc = 'Home / For Rent';
					bgImage = '/img/banner/header2.svg';
					break;
				case '/cs':
					title = '';
					desc = '';
					bgImage = '/img/banner/cs.png';
					break;
				case '/account/join':
					title = 'Login/Signup';
					desc = 'Authentication Process';
					bgImage = '/img/banner/ll1.png';
					setAuthHeader(true);
					break;
				case '/member':
					title = 'Member Page';
					desc = '';
					bgImage = '/img/banner/be2.png';
					break;
				default:
					break;
			}

			return { title, desc, bgImage };
		}, [router.pathname]);

		/** LIFECYCLES **/
		useEffect(() => {
			const jwt = getJwtToken();
			if (jwt) updateUserInfo(jwt);
		}, []);

		/** HANDLERS **/

		if (device == 'mobile') {
			return (
				<>
					<Head>
						<title>vehicles</title>
						<meta name={'title'} content={`vehicles`} />
					</Head>
					<Stack id="mobile-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		} else {
			return (
				<>
					<Head>
						<title>vehicles</title>
						<meta name={'title'} content={`vehicles`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack
							className={`header-basic ${authHeader && 'auth'}`}
							style={{
								backgroundImage: `url(${memoizedValues.bgImage})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								// boxShadow: 'inset 10px 40px 150px 40px rgb(24 22 36)',
							}}
						>
							<Stack className={'container'}>
								<strong>{t(memoizedValues.title)}</strong>
								<span>{t(memoizedValues.desc)}</span>
							</Stack>
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Chat />

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		}
	};
};

export default withLayoutBasic;
