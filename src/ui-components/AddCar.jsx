import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text, TextField, Button } from '@aws-amplify/ui-react';


export default function AddCar(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="16px"
    direction="column"
    width="618px"
    height="531px"
    justifyContent="flex-start"
    alignItems="flex-start"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "AddCar")}
    {...rest}
  >
    <Flex
      gap="24px"
      direction="column"
      width="608px"
      height="488px"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      position="relative"
      padding="24px 24px 24px 24px"
      {...getOverrideProps(overrides, "Content")}
    >
      <Flex
        gap="16px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Edit Profile38601438")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          shrink="0"
          position="relative"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "Edit Profile38601440")}
        >
          Add Car 
        </Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Forms")}
      >
        <TextField
          label="Name"
          placeholder="Toyota Camry"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38601446")}
        />
        <TextField
          label="Price per day"
          placeholder="6000"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38601447")}
        />
        <TextField
          label="Description"
          placeholder="4 seats"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38601471")}
        />
        <TextField
          label="Image link"
          placeholder="image url"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38601445")}
        />
      </Flex>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      >
        Save
      </Button>
    </Flex>
  </Flex>
  )
}
