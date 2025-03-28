
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

export declare type CarRentalCardOverridesProps = {
  'image'?: PrimitiveOverrideProps<ImageProps>;
  '$99 USD'?: PrimitiveOverrideProps<TextProps>;
  '4bds 3 ba 2,530 sqft - Active'?: PrimitiveOverrideProps<TextProps>;
  '832 34th Ave, Seattle, WA 98122'?: PrimitiveOverrideProps<TextProps>;
  'Button'?: PrimitiveOverrideProps<ButtonProps>;
  'Text Group'?: PrimitiveOverrideProps<FlexProps>;
  'Card Area'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type CarRentalCardProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: CarRentalCardOverridesProps | undefined | null;
}>;

export default function CarRentalCard(props: CarRentalCardProps): React.ReactElement;
  