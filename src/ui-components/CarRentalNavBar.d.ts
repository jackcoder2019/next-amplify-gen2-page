
import * as React from 'react';

import { FlexProps, ImageProps, TextProps, ButtonProps } from '@aws-amplify/ui-react';

export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;

export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};

export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;

export declare type CarRentalNavBarOverridesProps = {
  'image38601372'?: PrimitiveOverrideProps<ImageProps>;
  'Car Rental'?: PrimitiveOverrideProps<TextProps>;
  'Button'?: PrimitiveOverrideProps<ButtonProps>;
  'image3860799'?: PrimitiveOverrideProps<ImageProps>;
  'Frame 321'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type CarRentalNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: CarRentalNavBarOverridesProps | undefined | null;
}>;

export default function CarRentalNavBar(props: CarRentalNavBarProps): React.ReactElement;
  