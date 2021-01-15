type User =  {
  email: string;
  cpf: string;
  birthDate: string;
  password: string;
}

type InputError = {
  emailError: boolean;
  cpfError: boolean;
  birthDateError: boolean;
  passwordError: boolean;
  readCheckError: boolean;
}

export {User, InputError}