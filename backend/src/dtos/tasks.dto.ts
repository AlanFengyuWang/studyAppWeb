import { IsEmail, IsIn, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  public title!: string;

  @IsString()
  public description!: string;
  
  @IsIn(["Work", "Exercise", "Entertainment", "Others"])
  public type!: string;

  @IsString()
  public due!: string;

  @IsString()
  public startingTime!:string
}
