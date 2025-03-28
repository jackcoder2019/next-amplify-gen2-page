import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image, Text, Button } from '@aws-amplify/ui-react';


export default function CarRentalNavBar(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="40px"
    direction="row"
    justifyContent="center"
    alignItems="center"
    position="relative"
    boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
    padding="24px 32px 24px 32px"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "CarRentalNavBar")}
    {...rest}
  >
    <Image
      width="100px"
      height="100px"
      display="block"
      shrink="0"
      position="relative"
      objectFit="cover"
      alt=""
      {...getOverrideProps(overrides, "image38601372")}
    />
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="700"
      color="rgba(0,0,0,1)"
      lineHeight="24px"
      textAlign="center"
      display="block"
      width="140px"
      height="34px"
      shrink="0"
      position="relative"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "Car Rental")}
    >
      Car Rental
    </Text>
    <Flex
      gap="32px"
      direction="row"
      width="1056px"
      justifyContent="center"
      alignItems="center"
      shrink="0"
      position="relative"
      {...getOverrideProps(overrides, "Frame 321")}
    >
      <Button
        shrink="0"
        size="large"
        isDisabled={false}
        variation="default"
        {...getOverrideProps(overrides, "Button")}
      >
        Sign out
      </Button>
      <Image
        width="45px"
        height="45px"
        display="block"
        shrink="0"
        position="relative"
        borderRadius="160px"
        objectFit="cover"
        alt=""
        {...getOverrideProps(overrides, "image3860799")}
      />
    </Flex>
  </Flex>
  )
}
