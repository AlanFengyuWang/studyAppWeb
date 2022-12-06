import { IsArray, IsBoolean, IsEmail, IsObject, isString, IsString } from 'class-validator';

class Name {
  @IsString()
  public first!: string;

  @IsString()
  public last!: string;
}


export class CreateUserDto {
  @IsObject()
  public name!: Name;

  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;

  @IsString()
  public image!: string;

  @IsString()
  public accountTimeCreated!: string;

  @IsArray()
  public tasks!: [];

}

export class IsThirdPartyDto {
  @IsString()
  public isThirdParty!: string;
}

export class LoginDto {
  @IsString()
  public email!: string;
  
  @IsString()
  public password!: string;
}
