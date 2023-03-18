import { clsx } from 'clsx';
import { Button } from 'components/Button';
import { CheckBox } from 'components/CheckBox';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import { TextInput } from 'components/TextInput';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { CgLock, CgEye } from 'react-icons/cg';
import { FiLogIn } from 'react-icons/fi';
type IForm = {
  email: string;
  password: string;
  remember: boolean;
};
export default function Home() {
  const { register, handleSubmit } = useForm<IForm>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="bg-gray-900 flex min-h-screen justify-between items-start">
      <Head>
        <title>Camp In</title>
      </Head>
      <div className="flex flex-1 p-5 flex-col  min-h-screen ">
        <header className="flex justify-start ">
          <Image
            src="/images/Logo.svg"
            width={115}
            height={28}
            alt="Logo"
            priority
          />
        </header>
        <main className="flex flex-1  ">
          <form
            onSubmit={handleSubmit((e) => {
              alert(JSON.stringify(e));
            })}
            className="flex flex-1 w-full max-w-[28rem] flex-col justify-between h-[28rem] sm:bg-gray-700 mx-auto sm:m-auto rounded py-5  sm:px-10"
          >
            <div className="flex flex-col justify-center ">
              <div className="flex gap-2">
                <FiLogIn className="h-5 w-5 text-orange-900" />
                <Heading size="md">Faça seu login</Heading>
              </div>
              <Text size="md">Entre com suas informações de cadastro.</Text>
            </div>
            <label>
              <Text className="font-Poppins" size="lg">
                E-mail
              </Text>
              <TextInput.Root className="mt-1">
                <BiEnvelope className="h-5 w-5 text-orange-900" />
                <TextInput.Input
                  placeholder="Digite seu e-mail"
                  autoComplete="email"
                  type="text"
                  {...register('email')}
                />
              </TextInput.Root>
            </label>
            <label>
              <Text className="font-Poppins" size="lg">
                Senha
              </Text>
              <TextInput.Root className="mt-1">
                <CgLock className="h-5 w-5" />

                <TextInput.Input
                  placeholder="Digite sua senha"
                  autoComplete="new-password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="appearance-none ml-3"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="h-5 w-5" />
                  ) : (
                    <AiOutlineEye className="h-5 w-5" />
                  )}
                </button>
              </TextInput.Root>
            </label>
            <div className="flex justify-between items-center">
              <Text className="text-gray-200 font-normal" size="md" asChild>
                <label className="flex items-center gap-1">
                  <CheckBox {...register('remember')} />
                  Lembre-me
                </label>
              </Text>

              <Text
                className="text-orange-900 font-Poppins font-semibold"
                size="sm"
              >
                Esqueci minha senha
              </Text>
            </div>
            <Button type="submit">Entrar</Button>

            <Text
              size="md"
              className="text-orange-900 text-center font-Poppins font-normal"
            >
              Não tem uma conta?{' '}
              <Text
                size="md"
                className="text-orange-900 font-Poppins  font-semibold"
              >
                Registre-se
              </Text>
            </Text>
          </form>
        </main>
      </div>
      <div className="hidden  lg:flex flex-1 min-h-screen items-center justify-center">
        <Image
          src="/images/side-image.jpg"
          width={500}
          height={500}
          className="flex-1 flex object-cover w-1/2 max-w-[50vw] max-h-screen "
          alt="Caminhonete ao lado de um lag, com equipamentos para acampamento"
          priority
        />
      </div>
    </div>
  );
}
