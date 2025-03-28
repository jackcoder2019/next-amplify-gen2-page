
import * as React from 'react';

import { FlexProps, TextProps } from '@aws-amplify/ui-react';

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

export declare type ItemCardOverridesProps = {
  'Name'?: PrimitiveOverrideProps<TextProps>;
  'Description'?: PrimitiveOverrideProps<TextProps>;
  'Product Title'?: PrimitiveOverrideProps<FlexProps>;
  'Price'?: PrimitiveOverrideProps<TextProps>;
  'Frame 417'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type ItemCardProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: ItemCardOverridesProps | undefined | null;
}>;

export default function ItemCard(props: ItemCardProps): React.ReactElement;
  