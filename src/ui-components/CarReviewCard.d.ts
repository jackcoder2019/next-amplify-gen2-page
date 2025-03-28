
import * as React from 'react';

import { FlexProps, ImageProps, TextProps, IconProps, DividerProps } from '@aws-amplify/ui-react';

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

export declare type CarReviewCardOverridesProps = {
  'image'?: PrimitiveOverrideProps<ImageProps>;
  'Information about this product'?: PrimitiveOverrideProps<TextProps>;
  'Vector'?: PrimitiveOverrideProps<IconProps>;
  'Icon'?: PrimitiveOverrideProps<FlexProps>;
  'Frame'?: PrimitiveOverrideProps<FlexProps>;
  'Classic Long Sleeve T-Shirt'?: PrimitiveOverrideProps<TextProps>;
  'Title'?: PrimitiveOverrideProps<FlexProps>;
  'Divider'?: PrimitiveOverrideProps<DividerProps>;
  'Information about this product.'?: PrimitiveOverrideProps<TextProps>;
  'Features'?: PrimitiveOverrideProps<FlexProps>;
  'Card Area'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type CarReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: CarReviewCardOverridesProps | undefined | null;
}>;

export default function CarReviewCard(props: CarReviewCardProps): React.ReactElement;
  