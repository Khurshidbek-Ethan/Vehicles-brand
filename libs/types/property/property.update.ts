import { PropertyBrand, PropertyColor, PropertyLocation, PropertyStatus, PropertyType } from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
	propertyType?: PropertyType;
	propertyStatus?: PropertyStatus;
	propertyLocation?: PropertyLocation;
	propertyBrand?: PropertyBrand;
	propertyColor?: PropertyColor;
	propertyAddress?: string;
	propertyTitle?: string;
	propertyPrice?: number;
	propertyImages?: string[];
	propertyDesc?: string;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
}
