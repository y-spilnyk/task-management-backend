import { IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../task-status.enum";
import { User } from "src/auth/user.entity";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsOptional()
    user: User;
}
