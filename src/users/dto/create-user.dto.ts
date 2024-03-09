import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
export class CraeteUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;

  @IsEnum(["INTERN","ENGINEER","ADMIN"], {
    message: 'Valid role required'
  })
  role: "INTERN"|"ENGINEER"|"ADMIN";
}