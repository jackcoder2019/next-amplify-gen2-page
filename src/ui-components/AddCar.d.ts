
import * as React from 'react';

import { FlexProps, TextProps, TextFieldProps, ButtonProps } from '@aws-amplify/ui-react';

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

export declare type AddCarOverridesProps = {
  'Edit Profile38601440'?: PrimitiveOverrideProps<TextProps>;
  'Edit Profile38601438'?: PrimitiveOverrideProps<FlexProps>;
  'TextField38601446'?: PrimitiveOverrideProps<TextFieldProps>;
  'TextField38601447'?: PrimitiveOverrideProps<TextFieldProps>;
  'TextField38601471'?: PrimitiveOverrideProps<TextFieldProps>;
  'TextField38601445'?: PrimitiveOverrideProps<TextFieldProps>;
  'Forms'?: PrimitiveOverrideProps<FlexProps>;
  'Button'?: PrimitiveOverrideProps<ButtonProps>;
  'Content'?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;

export declare type AddCarProps = React.PropsWithChildren<Partial<FlexProps> & {

  overrides?: AddCarOverridesProps | undefined | null;
}>;

export default function AddCar(props: AddCarProps): React.ReactElement;
  