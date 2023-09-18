import * as React from "react";
import { TypographyVariants, typography } from "./typography-variants";

type TypographyElements = React.ElementType;

type TextProps<C extends TypographyElements> = {
  as?: C;
} & TypographyVariants;

type PolymorphicRef<C extends TypographyElements> =
  React.ComponentPropsWithRef<C>["ref"];

type TypographyProps<C extends TypographyElements> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

type TypographyComponent = <C extends TypographyElements = "span">(
  props: TypographyProps<C>
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
// const Typography: TypographyComponent = React.forwardRef(
//   <C extends TypographyElements = "span">(
//     props: TypographyProps<C>,
//     ref: PolymorphicRef<C>
//   ) => {
//     const { as, children, color, variant, className, ...restProps } = props;

//     const Component = as || "span";

//     const classes = typography({ color, variant }, className);

//     return (
//       <Component ref={ref} className={classes} {...restProps}>
//         {children}
//       </Component>
//     );
//   }
// );

const Typography = <C extends TypographyElements>(
  props: TypographyProps<C>
) => {
  const { as, children, color, variant, className, ...restProps } = props;

  const Component = as || "span";

  const classes = typography({ color, variant }, className);

  return (
    <Component className={classes} {...restProps}>
      {children}
    </Component>
  );
};

const TypographyExample = () => {
  return (
    <div className='not-prose border border-gray-800 px-6 py-4 rounded-md mb-6'>
      <Typography>span</Typography>
      <Typography as='h1' variant='heading1'>
        Heading 1
      </Typography>
      <Typography as='h2' variant='heading2'>
        Heading 2
      </Typography>
      <Typography as='h3' variant='heading3'>
        Heading 3
      </Typography>
      <Typography as='h4' variant='heading4'>
        Heading 4
      </Typography>
      <Typography as='h5' variant='heading5'>
        Heading 5
      </Typography>
      <Typography as='h6' variant='heading6'>
        Heading 6
      </Typography>
      <Typography as='p'>Default body</Typography>
      <Typography as='p' variant='body2'>
        Body 2
      </Typography>
      <Typography as='p' variant='body3'>
        Body 3
      </Typography>
      <Typography as='p' variant='body4'>
        Body body4
      </Typography>
      <Typography as='a' variant='link' href='https://jeffsegovia.dev'>
        Link
      </Typography>
      <Typography as='div' variant='heading2' color='primary'>
        Primary
      </Typography>
      <Typography as='div' variant='heading2' color='success'>
        Success
      </Typography>
      <Typography as='div' variant='heading2' color='info'>
        Info
      </Typography>
      <Typography as='div' variant='heading2' color='warning'>
        Warning
      </Typography>
      <Typography as='div' variant='heading2' color='danger'>
        Danger
      </Typography>
    </div>
  );
};

export default TypographyExample;
