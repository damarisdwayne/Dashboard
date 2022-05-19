import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
}).required()

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8} //multiplica por 4 = 2rem ou 32px
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />

          <Input
            name='password'
            type='password'
            error={errors.password}
            label='Senha'
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >
          Entrar</Button>
      </Flex>
    </Flex>
  )
}
