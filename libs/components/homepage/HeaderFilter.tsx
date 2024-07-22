import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Stack, Box, Modal, Divider, Button } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { propertySquare, propertyYears } from '../../config';
import { PropertyBrand, PropertyColor, PropertyLocation, PropertyType } from '../../enums/property.enum';
import { PropertiesInquiry } from '../../types/property/property.input';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	bgcolor: 'background.paper',
	borderRadius: '12px',
	outline: 'none',
	boxShadow: 24,
};

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

const thisYear = new Date().getFullYear();

interface HeaderFilterProps {
	initialInput: PropertiesInquiry;
}

const HeaderFilter = (props: HeaderFilterProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const { t, i18n } = useTranslation('common');
	const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(initialInput);
	const locationRef: any = useRef();
	const typeRef: any = useRef();
	const brandRef: any = useRef();
	const colorRef: any = useRef();
	const router = useRouter();
	const [openAdvancedFilter, setOpenAdvancedFilter] = useState(false);
	const [openLocation, setOpenLocation] = useState(false);
	const [openType, setOpenType] = useState(false);
	const [openBrand, setOpenBrand] = useState(false);
	const [openColor, setOpenColor] = useState(false);
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [propertyType, setPropertyType] = useState<PropertyType[]>(Object.values(PropertyType));
	const [propertyBrand, setPropertyBrand] = useState<PropertyBrand[]>(Object.values(PropertyBrand));
	const [propertyColor, setPropertyColor] = useState<PropertyColor[]>(Object.values(PropertyColor));
	const [priceCheck, setPriceCheck] = useState({ start: 0, end: 100000000 });
	/** LIFECYCLES **/
	useEffect(() => {
		const clickHandler = (event: MouseEvent) => {
			if (!locationRef?.current?.contains(event.target)) {
				setOpenLocation(false);
			}

			if (!typeRef?.current?.contains(event.target)) {
				setOpenType(false);
			}

			if (!brandRef?.current?.contains(event.target)) {
				setOpenBrand(false);
			}

			if (!colorRef?.current?.contains(event.target)) {
				setOpenColor(false);
			}
		};

		document.addEventListener('mousedown', clickHandler);

		return () => {
			document.removeEventListener('mousedown', clickHandler);
		};
	}, []);

	/** HANDLERS **/
	const advancedFilterHandler = (status: boolean) => {
		setOpenLocation(false);
		setOpenType(false);
		setOpenBrand(false);
		setOpenColor(false);
		setOpenAdvancedFilter(status);
	};

	const locationStateChangeHandler = () => {
		setOpenLocation((prev) => !prev);
		setOpenType(false);
		setOpenBrand(false);
		setOpenColor(false);
	};

	const colorStateChangeHandler = () => {
		setOpenColor((prev) => !prev);
		setOpenLocation(false);
		setOpenType(false);
		setOpenBrand(false);
	};

	const brandStateChangeHandler = () => {
		setOpenBrand((prev) => !prev);
		setOpenColor(false);
		setOpenLocation(false);
		setOpenType(false);
	};

	const typeStateChangeHandler = () => {
		setOpenType((prev) => !prev);
		setOpenBrand(false);
		setOpenColor(false);
		setOpenLocation(false);
	};

	const disableAllStateHandler = () => {
		setOpenBrand(false);
		setOpenType(false);
		setOpenLocation(false);
		setOpenColor(false);
	};

	const propertyLocationSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						locationList: [value],
					},
				});
				typeStateChangeHandler();
			} catch (err: any) {
				console.log('ERROR, propertyLocationSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyBrandSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						brandList: [value],
					},
				});
				colorStateChangeHandler();
			} catch (err: any) {
				console.log('ERROR, propertyBrandSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyTypeSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						typeList: [value],
					},
				});
				brandStateChangeHandler();
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyColorSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						colorList: [value],
					},
				});

				disableAllStateHandler();
			} catch (err: any) {
				console.log('ERROR, propertyColorSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const resetFilterHandler = () => {
		setSearchFilter(initialInput);
	};

	const pushSearchHandler = async () => {
		try {
			if (searchFilter?.search?.locationList?.length == 0) {
				delete searchFilter.search.locationList;
			}

			if (searchFilter?.search?.typeList?.length == 0) {
				delete searchFilter.search.typeList;
			}

			if (searchFilter?.search?.brandList?.length == 0) {
				delete searchFilter.search.brandList;
			}

			if (searchFilter?.search?.colorList?.length == 0) {
				delete searchFilter.search.colorList;
			}

			await router.push(
				`/property?input=${JSON.stringify(searchFilter)}`,
				`/property?input=${JSON.stringify(searchFilter)}`,
			);
		} catch (err: any) {
			console.log('ERROR, pushSearchHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>HEADER FILTER MOBILE</div>;
	} else {
		return (
			<>
				
					<Stack className={'search-box'}>
						<Stack className={'search-box-other'}>
							

							<Box className={'search-btn'} onClick={pushSearchHandler}>
								<img src="/img/icons/search_white.svg" alt="" />
							</Box>
						</Stack>
						<Stack className={'select-box'}>
							<Box component={'div'} className={`box ${openLocation ? 'on' : ''}`} onClick={locationStateChangeHandler}>
								<span>
									{searchFilter?.search?.locationList ? searchFilter?.search?.locationList[0] : t('Location')}{' '}
								</span>
								<ExpandMoreIcon />
							</Box>
							<Box className={`box ${openType ? 'on' : ''}`} onClick={typeStateChangeHandler}>
								<span> {searchFilter?.search?.typeList ? searchFilter?.search?.typeList[0] : t('Vehicles')} </span>
								<ExpandMoreIcon />
							</Box>
							<Box className={`box ${openBrand ? 'on' : ''}`} onClick={brandStateChangeHandler}>
								<span>
									{searchFilter?.search?.brandList ? `${searchFilter?.search?.brandList[0]} brands }` : t('Brands')}
								</span>
								<ExpandMoreIcon />
							</Box>
							<Box className={`box ${openColor ? 'on' : ''}`} onClick={colorStateChangeHandler}>
								<span>
									{searchFilter?.search?.colorList ? `${searchFilter?.search?.colorList[0]} color}` : t('Color')}
								</span>
								<ExpandMoreIcon />
							</Box>
						</Stack>

						{/*MENU */}
						<div className={`filter-location ${openLocation ? 'on' : ''}`} ref={locationRef}>
							{propertyLocation.map((location: string) => {
								return (
									<div onClick={() => propertyLocationSelectHandler(location)} key={location}>
										<img src={`img/banner/cities/${location}.webp`} alt="" />
										<span>{location}</span>
									</div>
								);
							})}
						</div>

						<div className={`filter-type ${openType ? 'on' : ''}`} ref={typeRef}>
							{propertyType.map((type: string) => {
								return (
									<div
										style={{ backgroundImage: `url(/img/banner/types/${type.toLowerCase()}.webp)` }}
										onClick={() => propertyTypeSelectHandler(type)}
										key={type}
									>
										<span>{type}</span>
									</div>
								);
							})}
						</div>

						<div className={`filter-brand ${openBrand ? 'on' : ''}`} ref={brandRef}>
							{propertyBrand.map((brand: string) => {
								return (
									<div onClick={() => propertyBrandSelectHandler(brand)} key={brand}>
										<img src={`img/banner/brand/${brand}.webp`} alt="" />
										<span>{brand}</span>
									</div>
								);
							})}
						</div>

						<div className={`filter-color ${openColor ? 'on' : ''}`} ref={colorRef}>
							{propertyColor.map((color: string) => {
								return (
									<div onClick={() => propertyColorSelectHandler(color)} key={color}>
										<img src={`img/banner/color/${color}.webp`} alt="" />
										<span>{color}</span>
									</div>
								);
							})}
						</div>
					</Stack>
				

				{/* @ts-ignore */}
				<Box sx={style}></Box>
			</>
		);
	}
};

HeaderFilter.defaultProps = {
	initialInput: {
		page: 1,
		limit: 9,
		search: {
			pricesRange: {
				start: 0,
				end: 2000000,
			},
		},
	},
};

export default HeaderFilter;
