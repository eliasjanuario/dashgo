import { Flex, Button } from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório.").email("E-mail inválido."),
  password: yup.string().required("Senha obrigatória.")
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log({values});
  }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} background="gray.800" padding="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
          <Input name="email" type="email" label="E-mail" error={errors.email} {...register("email")} />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register("password")} />
        <Button type="submit" marginTop="4" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
