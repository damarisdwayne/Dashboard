import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {//o (...rest) está pegando todas as propriedades restantes do input 
    return (
        <FormControl isInvalid={!!error}>
        {/* caso o label exista, mostre o formLabel */}
        { !!label && <FormLabel htmlFor='email'>{label}</FormLabel>}

        <ChakraInput 
          name={name} 
          id={name}
          // type={type}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size= "lg"
          {...rest}
          ref={ref}
        />

        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
}

export const Input = forwardRef(InputBase);